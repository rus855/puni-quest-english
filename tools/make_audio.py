# 英語の 音声ファイルを つくる（Microsoft Edge の 読み上げ音声 edge-tts を 使う）
# つかいかた：
#   1) node tools/check_data.js . tools/audio_list.json   … 音声の 一覧を つくる（データの チェックも する）
#   2) python tools/make_audio.py                        … audio/ に まだ ない mp3 だけ 作る
# ※ pip install edge-tts が 必要
import asyncio, json, os, sys
import edge_tts

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
OUT = os.path.join(ROOT, "audio")
VOICE = {"F": "en-US-JennyNeural", "M": "en-US-GuyNeural", "G": "en-GB-SoniaNeural", "H": "en-GB-RyanNeural"}


async def one(sem, it, stat):
    path = os.path.join(OUT, it["f"] + ".mp3")
    if os.path.exists(path) and os.path.getsize(path) > 1000:
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    async with sem:
        for k in range(4):
            try:
                await edge_tts.Communicate(it["s"], VOICE[it["v"]], rate=it.get("r") or "+0%").save(path)
                stat["made"] += 1
                return
            except Exception as e:  # 通信の 失敗は すこし 待って やりなおす
                await asyncio.sleep(2 + k * 3)
        stat["fail"].append(it["f"])


async def main():
    items = json.load(open(os.path.join(HERE, "audio_list.json"), encoding="utf-8"))
    sem = asyncio.Semaphore(6)
    stat = {"made": 0, "fail": []}
    await asyncio.gather(*(one(sem, it, stat) for it in items))
    print("作った", stat["made"], "失敗", len(stat["fail"]), stat["fail"][:10])


asyncio.run(main())

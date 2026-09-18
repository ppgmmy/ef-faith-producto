"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const itemBase = {
  jacket: 480,
  tote: 360,
  bible: 320,
} as const;

const areaExtra = {
  small: 0,
  pocket: 80,
  back: 220,
} as const;

export function UpcycleQuote() {
  const [item, setItem] = useState<keyof typeof itemBase>("jacket");
  const [area, setArea] = useState<keyof typeof areaExtra>("pocket");
  const [goldThread, setGoldThread] = useState(true);
  const [giftBox, setGiftBox] = useState(false);

  const total = useMemo(() => {
    let sum = itemBase[item] + areaExtra[area];
    if (goldThread) sum += 60;
    if (giftBox) sum += 40;
    return sum;
  }, [item, area, goldThread, giftBox]);

  return (
    <div className="border border-sage/30 bg-mist/40 p-6 md:p-8">
      <p className="font-latin text-sm tracking-[0.2em] text-gold uppercase">
        Custom Quote
      </p>
      <h3 className="mt-2 font-display text-2xl text-pine">舊衣刺繡重塑試算</h3>
      <p className="mt-3 text-sm leading-7 text-ash">
        借鏡市場做法：選物品類型＋刺繡面積，即時睇參考價（非正式報價）。之後可預約真實評估。
      </p>

      <div className="mt-6 space-y-5 text-sm">
        <fieldset>
          <legend className="text-pine">1. 物品</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["jacket", "外套／襯衫"],
                ["tote", "帆布袋／布袋"],
                ["bible", "聖經套／書套"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setItem(value)}
                className={`px-3 py-2 border transition ${
                  item === value
                    ? "border-gold bg-gold/15 text-pine"
                    : "border-sage/40 text-ash hover:border-moss"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-pine">2. 刺繡面積</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["small", "袖口／領口"],
                ["pocket", "胸前／口袋"],
                ["back", "背部大面積"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setArea(value)}
                className={`px-3 py-2 border transition ${
                  area === value
                    ? "border-gold bg-gold/15 text-pine"
                    : "border-sage/40 text-ash hover:border-moss"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-2 text-ash">
          <input
            type="checkbox"
            checked={goldThread}
            onChange={(e) => setGoldThread(e.target.checked)}
          />
          rPET／金絲繡線（+HK$60）
        </label>
        <label className="flex items-center gap-2 text-ash">
          <input
            type="checkbox"
            checked={giftBox}
            onChange={(e) => setGiftBox(e.target.checked)}
          />
          零塑紙禮盒（+HK$40）
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-sage/30 pt-5">
        <div>
          <p className="text-xs tracking-widest text-ash/70 uppercase">
            參考金額
          </p>
          <p className="mt-1 font-display text-3xl text-pine">HK${total}</p>
        </div>
        <Button
          href={`/contact?kind=custom_gift&topic=舊衣刺繡重塑試算HK$${total}`}
          variant="primary"
        >
          用呢個估價去諮詢
        </Button>
      </div>
    </div>
  );
}

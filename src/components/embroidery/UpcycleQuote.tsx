"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { embroideryMotifs, type MotifId } from "@/data/motifs";

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
  const [motifId, setMotifId] = useState<MotifId>("cross");
  const [goldThread, setGoldThread] = useState(false);
  const [giftBox, setGiftBox] = useState(false);

  const selectedMotif = embroideryMotifs.find((m) => m.id === motifId);

  const total = useMemo(() => {
    let sum = itemBase[item] + areaExtra[area];
    const motif = embroideryMotifs.find((m) => m.id === motifId);
    if (motif) sum += motif.priceAddonHkd;
    if (goldThread) sum += 60;
    if (giftBox) sum += 40;
    return sum;
  }, [item, area, motifId, goldThread, giftBox]);

  const topic = encodeURIComponent(
    `舊衣刺繡重塑·${selectedMotif?.name ?? "公仔"}·試算HK$${total}`,
  );

  return (
    <div className="border border-sage/30 bg-mist/40 p-6 md:p-8">
      <p className="font-latin text-sm tracking-[0.2em] text-gold uppercase">
        Custom Quote
      </p>
      <h3 className="mt-2 font-display text-2xl text-pine">舊衣刺繡重塑試算</h3>
      <p className="mt-3 text-sm leading-7 text-ash">
        揀物品、面積同公仔圖騰，即時睇參考價（非正式報價）。之後可預約真實評估。
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

        <fieldset>
          <legend className="text-pine">3. 公仔圖騰（繡喺上面）</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {embroideryMotifs.map((motif) => (
              <button
                key={motif.id}
                type="button"
                onClick={() => setMotifId(motif.id)}
                className={`px-3 py-2 border transition ${
                  motifId === motif.id
                    ? "border-gold bg-gold/15 text-pine"
                    : "border-sage/40 text-ash hover:border-moss"
                }`}
              >
                {motif.name}
                {motif.priceAddonHkd > 0 ? ` +${motif.priceAddonHkd}` : ""}
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
          可選：金繕細線簽名（+HK$60，唔係必須）
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
          {selectedMotif ? (
            <p className="mt-1 text-xs text-moss">{selectedMotif.faith}</p>
          ) : null}
        </div>
        <Button
          href={`/contact?kind=custom_gift&topic=${topic}`}
          variant="primary"
        >
          用呢個估價去諮詢
        </Button>
      </div>
    </div>
  );
}

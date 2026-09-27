import type { MockKind } from "@/data/projects";

function tone(dark: boolean) {
  return dark
    ? {
        line: "border-paper/15",
        border: "border-paper/20",
        dot: "bg-paper/30",
        solid: "bg-paper",
        s30: "bg-paper/30",
        s20: "bg-paper/20",
        s15: "bg-paper/15",
        s40: "bg-paper/40",
        s25: "bg-paper/25",
        s60: "bg-paper/60",
        frame: "border-paper",
        surface: "bg-ink",
        notch: "bg-paper/40",
      }
    : {
        line: "border-ink/15",
        border: "border-ink/20",
        dot: "bg-ink/30",
        solid: "bg-ink",
        s30: "bg-ink/30",
        s20: "bg-ink/20",
        s15: "bg-ink/15",
        s40: "bg-ink/40",
        s25: "bg-ink/25",
        s60: "bg-ink/60",
        frame: "border-ink",
        surface: "bg-paper",
        notch: "bg-ink/40",
      };
}

function BrowserChrome({ dark, bar }: { dark: boolean; bar: string }) {
  const t = tone(dark);
  return (
    <>
      <div className={`h-5 shrink-0 border-b ${t.line} flex items-center gap-1 px-2`}>
        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1.5">
        <div className={`h-[38%] rounded-md ${t.solid}`} />
        <div className={`h-2 w-3/4 rounded ${t.s30}`} />
        <div className={`h-2 w-1/2 rounded ${t.s20}`} />
        <div className="flex-1 grid grid-cols-2 gap-1.5">
          <div className={`rounded-md ${t.s15}`} />
          <div className={`rounded-md ${t.s40}`} />
          <div className={`rounded-md ${t.s25}`} />
          <div className={`rounded-md ${bar}`} />
        </div>
      </div>
    </>
  );
}

function PhoneChrome({ dark }: { dark: boolean }) {
  const t = tone(dark);
  return (
    <>
      <div className={`mx-auto mt-1 w-1/3 h-1.5 rounded-full ${t.notch}`} />
      <div className="flex-1 p-1.5 flex flex-col gap-1.5 mt-1">
        <div className={`h-[30%] rounded-lg ${t.solid}`} />
        <div className={`h-1.5 w-2/3 rounded ${t.s30}`} />
        <div className={`h-6 rounded-md ${t.s15}`} />
        <div className={`h-6 rounded-md ${t.s30}`} />
        <div className={`flex-1 rounded-md ${t.s15}`} />
        <div className={`h-3 rounded-full ${t.s60}`} />
      </div>
    </>
  );
}

export function ArcMock({ mock, dark }: { mock: MockKind; dark: boolean }) {
  const t = tone(dark);
  if (mock === "phone") {
    return (
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-10 h-[calc(100%-3.5rem)] aspect-[9/19] rounded-[22px] border-[4px] ${t.frame} ${t.surface} overflow-hidden flex flex-col`}
      >
        <PhoneChrome dark={dark} />
      </div>
    );
  }

  if (mock === "browser") {
    return (
      <div
        className={`absolute left-3 right-3 top-10 bottom-4 rounded-[12px] border ${t.border} ${t.surface} overflow-hidden flex flex-col`}
      >
        <BrowserChrome dark={dark} bar={t.s15} />
      </div>
    );
  }

  return (
    <>
      <div
        className={`absolute left-3 right-3 top-10 h-[58%] rounded-[12px] border ${t.border} ${t.surface} overflow-hidden flex flex-col`}
      >
        <BrowserChrome dark={dark} bar={t.s15} />
      </div>
      <div
        className={`absolute right-3 bottom-3 h-[52%] aspect-[9/19] rounded-[22px] border-[4px] ${t.frame} ${t.surface} overflow-hidden flex flex-col`}
      >
        <PhoneChrome dark={dark} />
      </div>
    </>
  );
}

export function ProductBrowser({ shadow = "shadow-soft" }: { shadow?: string }) {
  return (
    <div className={`w-full aspect-[16/10] bg-paper rounded-[14px] border border-ink/10 ${shadow} flex flex-col overflow-hidden`}>
      <div className="h-6 border-b border-ink/10 flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="ml-3 h-3 w-1/3 rounded-full bg-ink/5" />
      </div>
      <div className="flex-1 p-3 md:p-4 grid grid-cols-3 gap-2">
        <div className="col-span-3 h-1/2 min-h-[28px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
      </div>
    </div>
  );
}

export function ProductPhone({
  frame = "border-ink/10",
  shadow = "shadow-soft-lg",
}: {
  frame?: string;
  shadow?: string;
}) {
  return (
    <div className={`w-full aspect-[9/19] bg-paper rounded-[28px] border-[5px] ${frame} ${shadow} flex flex-col overflow-hidden`}>
      <div className="mx-auto mt-1.5 w-1/3 h-2.5 rounded-full bg-ink/10" />
      <div className="flex-1 p-2 flex flex-col gap-1.5 mt-1">
        <div className="h-1/4 bg-ink/[0.06] rounded-lg" />
        <div className="h-3 w-2/3 bg-ink/[0.06] rounded" />
        <div className="flex-1 bg-ink/[0.06] rounded-lg" />
        <div className="h-5 bg-ink/10 rounded-full" />
      </div>
    </div>
  );
}

export function StageBrowser() {
  return (
    <div className="w-[80%] aspect-[16/10] bg-paper rounded-[14px] border border-ink/10 shadow-soft-paper flex flex-col overflow-hidden">
      <div className="h-7 border-b border-ink/10 flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="ml-3 h-3 w-1/3 rounded-full bg-ink/5" />
      </div>
      <div className="flex-1 p-3 md:p-4 grid grid-cols-3 gap-2">
        <div className="col-span-3 h-1/2 min-h-[28px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
        <div className="h-full min-h-[20px] bg-ink/[0.06] rounded-md" />
      </div>
    </div>
  );
}

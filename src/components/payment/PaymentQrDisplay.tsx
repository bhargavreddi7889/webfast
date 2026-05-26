import Image from "next/image";
import { PAYMENT_QR_SRC } from "@/lib/payment";

interface PaymentQrDisplayProps {
  size?: "sm" | "md" | "lg";
  showCaption?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { box: "h-36 w-36", img: 140 },
  md: { box: "h-48 w-48 sm:h-56 sm:w-56", img: 220 },
  lg: { box: "h-56 w-56 sm:h-64 sm:w-64", img: 256 },
};

export function PaymentQrDisplay({
  size = "md",
  showCaption = true,
  className = "",
}: PaymentQrDisplayProps) {
  const s = sizeMap[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-white bg-white p-2 shadow-lg ${s.box}`}
      >
        <Image
          src={PAYMENT_QR_SRC}
          alt="Scan to pay with UPI"
          width={s.img}
          height={s.img}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      {showCaption && (
        <p className="mt-3 text-center text-sm text-slate-600">
          Scan with any UPI app · PhonePe, GPay, Paytm
        </p>
      )}
    </div>
  );
}

import Image from "next/image";

export function BeautyHairPreview() {
  return (
    <div className="preview-beauty preview-beauty--real" aria-label="Beauty Hair mobile app preview">
      <div className="preview-beauty-real__backdrop" />
      <div className="preview-beauty-real__label"><span>BEAUTY HAIR / ANDROID</span><span>COMPLETED / 2026</span></div>
      <div className="preview-beauty-real__device preview-beauty-real__device--secondary">
        <Image src="/projects/beauty-hair/beauty-hair-appointments.png" alt="Beauty Hair appointment management screen" width={766} height={1280} sizes="180px" />
      </div>
      <div className="preview-beauty-real__device preview-beauty-real__device--primary">
        <Image priority src="/projects/beauty-hair/beauty-hair-home.png" alt="Beauty Hair dashboard showing appointments, clients, inventory and reports" width={617} height={1280} sizes="220px" />
      </div>
      <div className="preview-beauty-real__device preview-beauty-real__device--tertiary">
        <Image src="/projects/beauty-hair/beauty-hair-inventory.png" alt="Beauty Hair inventory management screen" width={736} height={1280} sizes="160px" />
      </div>
      <div className="preview-beauty-real__caption"><span>LOCAL-FIRST / SALON OPERATIONS</span><strong>Appointments, clients<br />and inventory in one place.</strong></div>
    </div>
  );
}

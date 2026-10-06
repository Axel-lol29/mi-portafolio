import Image from "next/image";

export function SweetBitesPreview() {
  return (
    <div className="preview-sweet-real" role="group" aria-label="Sweet Bites product website and assistant screenshots">
      <div className="preview-sweet-real__grid" aria-hidden="true" />
      <div className="preview-sweet-real__label"><span>SWEET BITES / PRODUCT WEBSITE</span><span>CATALOG · CONVERSATION</span></div>
      <div className="preview-sweet-real__screen preview-sweet-real__screen--home">
        <Image src="/projects/sweet-bites/sweet-bites-home.png" alt="Sweet Bites website home screen introducing the artisanal brand" width={1907} height={912} quality={95} sizes="(max-width: 800px) 58vw, 36vw" />
      </div>
      <div className="preview-sweet-real__screen preview-sweet-real__screen--products">
        <Image src="/projects/sweet-bites/sweet-bites-products-grid.png" alt="Sweet Bites product catalog screenshot with empanada flavors" width={1900} height={907} quality={95} sizes="(max-width: 800px) 48vw, 31vw" />
      </div>
      <div className="preview-sweet-real__screen preview-sweet-real__screen--chat">
        <Image src="/projects/sweet-bites/sweet-bites-chat-order.png" alt="Sweet Bites assistant recognizing order intent and offering a WhatsApp path" width={407} height={620} quality={95} sizes="(max-width: 800px) 22vw, 15vw" />
      </div>
      <div className="preview-sweet-real__caption"><span>03 / INTERACTIVE PRODUCT WEBSITE</span><strong>Browse the offer.<br />Start a conversation.</strong></div>
      <span className="preview-sweet-real__index" aria-hidden="true">HTML / CSS / JS</span>
    </div>
  );
}

import Image from "next/image";

export function LigaMXPreview() {
  return (
    <div className="preview-liga-real" aria-label="My Liga MX mobile app screenshots">
      <div className="preview-liga-real__grid" aria-hidden="true" />
      <div className="preview-liga-real__label"><span>MY LIGA MX / MOBILE</span><span>SPORTS DATA · AI CONTEXT</span></div>
      <div className="preview-liga-real__screen preview-liga-real__screen--secondary">
        <Image src="/projects/my-liga-mx/my-liga-mx-standings.png" alt="My Liga MX standings screen" width={635} height={1280} quality={95} sizes="(max-width: 800px) 28vw, 16vw" />
      </div>
      <div className="preview-liga-real__screen preview-liga-real__screen--primary">
        <Image src="/projects/my-liga-mx/my-liga-mx-home.png" alt="Personalized My Liga MX home screen" width={438} height={1051} quality={95} sizes="(max-width: 800px) 38vw, 23vw" />
      </div>
      <div className="preview-liga-real__screen preview-liga-real__screen--detail">
        <Image src="/projects/my-liga-mx/my-liga-mx-match-detail-final.png" alt="My Liga MX final match detail screen" width={438} height={1164} quality={95} sizes="(max-width: 800px) 24vw, 13vw" />
      </div>
      <div className="preview-liga-real__caption"><span>01 / PERSONALIZED FOOTBALL</span><strong>One place to follow the league.</strong></div>
    </div>
  );
}


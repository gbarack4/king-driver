import Image from "next/image";

type BrandProps = {
  light?: boolean;
  priority?: boolean;
};

export function Brand({ light = false, priority = false }: BrandProps) {
  return (
    <a className={light ? "brand light" : "brand"} href="/">
      <Image
        className="brand-mark"
        src="/logo.png"
        alt="Drivecab"
        width={36}
        height={36}
        priority={priority}
      />
      <span>drivecab</span>
      <small>DRIVING SCHOOL</small>
    </a>
  );
}

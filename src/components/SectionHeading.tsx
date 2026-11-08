interface SectionHeadingProps {
  overline: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  overline,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="overline-label">{overline}</p>
      <h2 className="display-2 mt-4">{title}</h2>
      {description ? (
        <p className="mt-5 text-[17px] leading-[1.65] text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}

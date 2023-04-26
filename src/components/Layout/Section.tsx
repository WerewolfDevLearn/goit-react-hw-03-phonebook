interface SectionProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

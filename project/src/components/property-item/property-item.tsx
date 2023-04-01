type PropertyItemProps = {
  item: string;
};

export function PropertyItem ({ item }: PropertyItemProps): JSX.Element {
  return <li className="property__inside-item">{item}</li>;
}

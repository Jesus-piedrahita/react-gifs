interface Title {
  title: string;
  description: string;
}

export function Header({ title, description }: Title) {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

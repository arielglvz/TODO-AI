const CardTitle = ({title, subtitle}) => {
  return (
    <div className="mb-3 py-3 mx-auto max-w-2xl">
      <h1 className="text-3xl text-center text-white">{title}</h1>
      <p className="text-center text-secondary">{subtitle}</p>
    </div>
  )
}

export default CardTitle

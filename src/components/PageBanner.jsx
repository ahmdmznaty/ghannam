export default function PageBanner({ title }) {
  return (
    <div className="banner">
      <div className="container banner-inner">
        <h1>{title}</h1>
        <span className="crumbs">Home / <b>Electronics</b></span>
      </div>
    </div>
  )
}

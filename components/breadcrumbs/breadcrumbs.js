import Link from 'next/link';

const BreadCrumbs = props => {
  return (
    <div className="breadcrumbs">
      <Link href='/'>
        <a href="" className="breadcrumbs__link">All categories</a>
      </Link> /
      <Link href='/'>
        <a href="" className="breadcrumbs__link">Woman</a>
      </Link> /
      <Link href='/'>
        <a href="" className="breadcrumbs__link active">Jackets</a>
      </Link>
    </div>
  )
}

export default BreadCrumbs;
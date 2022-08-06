import Head from 'next/head';

const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Отзывы наших клиентов</title>
        <meta name="title" content="Все отзывы"/>
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className='reviews'>
          { !!reviews.length && reviews.map(res => {
            return (
              <div key={res.id} className='review'>
                {res.id}){ ' ' }
                {`${res.body.slice(0, 90)}...`}
              </div>)
          })}
        </div>
      </div>
    </>
  );
}

// Аналог useEffect
// Данные берутся с сервера и на выход получаем страницу 

export async function getServerSideProps(context) {
  const response =  await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  // Берем первые 20 штук 
  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}
 
export default ReviewsPage;
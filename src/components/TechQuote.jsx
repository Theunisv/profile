import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const TechQuote = () => {
    const { data: randomTech, error, isValidating } = useSWR('https://techy-api.vercel.app/api/json', fetcher);
    if (error) console.log(error);
    if(isValidating)  return <p className='mt-5 text-center lg:leading-tight'>Loading...</p>;
return (
    <p className='mt-5 text-center lg:leading-tight'>{randomTech.message}</p>
);
}

export default TechQuote;
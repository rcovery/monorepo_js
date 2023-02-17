import dynamic from 'next/dynamic';

function Loader() {
  return <>Loading...</>;
}

// TODO create custom app

const DynamicPage = dynamic(
  () => import(`@onlytests/web/components/screens/home`),
  {
    loading: () => <Loader />,
  },
);

export default DynamicPage;

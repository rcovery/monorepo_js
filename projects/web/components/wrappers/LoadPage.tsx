import dynamic from 'next/dynamic';

function Loader() {
  return <>Loading...</>;
}

function Wrapper(name: string) {
  const DynamicPage = dynamic(
    () => import(`@onlytests/web/components/screens/${name}`),
    {
      loading: () => <Loader />,
    },
  );

  const Component = () => <DynamicPage />;
  return Component;
}

export default Wrapper;

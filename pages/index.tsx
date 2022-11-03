import {Layout} from "components/Layout";
import {Home} from "modules/Home";
import {GetServerSidePropsContext} from "next";


export default function HomePage({brand, category}: {brand: string, category: string}) {
    return (
        <Layout>
            <Home brand={brand} category={category} />
        </Layout>
    )
}


export async function getServerSideProps({query}: GetServerSidePropsContext) {

    return {
        props: {
            brand: query?.brand ?? '',
            category: query?.category ?? '',
        },
    }
}
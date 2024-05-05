import { GetServerSideProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import {Analysis, User} from "../../interfaces";
import {findAnalysis} from "../../utils/sample-api-analysis";
import {useUser} from "../../context/UserContext";

type Props = {
    analysis: Analysis;
};

const AnalysisDetailPage: NextPage<Props> = ({ analysis }) => {
    const user: User = useUser();
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title={`Analysis Detail`} user={user}>
            <h1>Analysis Detail</h1>
            <p>Type: {analysis.analysisType}</p>
            <p>Date: {analysis.createdAt.toDateString()}</p>
            <p>File: {analysis.file}</p>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    try {
        const analysis = await findAnalysis(id as string);
        return { props: { analysis } };
    } catch (error) {
        return { props: { errors: error.message } };
    }
};

export default AnalysisDetailPage;

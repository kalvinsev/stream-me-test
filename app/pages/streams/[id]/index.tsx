import { Container } from "@mui/material";

import Hero from "../../../components/Hero";
import Content from "../../../components/Content";
import { useStreamQuery } from "../../../lib/graphql/stream.graphql";
import { Stream } from "../../../__generated__/__types__";

export default function StreamDetail({ id }) {
    const { data, loading } = useStreamQuery({
        variables: { streamId: id }
    });

    if(!loading && data && data.stream) {
        return (
            <Container maxWidth='lg'>
                <Hero stream={data.stream as Stream} />
                <Content url={data.stream.url} />
            </Container>
        )
    }
    return null;
}

StreamDetail.getInitialProps = ({ query: { id } }) => {
    return { id };
}
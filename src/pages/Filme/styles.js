import styled from "styled-components";

export const Container = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding:2rem 2rem 2rem;
`;

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:20px;
`;
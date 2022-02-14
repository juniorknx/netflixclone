import { DetailComponent, Faq, Resume } from "./styles" 


export function Summary({faq, resume}){
    return (
        <>
            <DetailComponent>
                <Faq>
                    {faq}
                </Faq>

                <Resume>
                    {resume}
                </Resume>
            </DetailComponent>
        </>
    )
}
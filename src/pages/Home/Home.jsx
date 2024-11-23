
import { Container } from "./styles"

import { Header }    from "../../components/Header"
import { Input } from "../../components/Input";
import { Chat } from "../../components/Chat";

export function Home() {
    const teste = "No que posso ser útil!!!";
    return (
        <Container>
            <Header/>
            <Chat />
            {/* <Input title={teste}></Input> */}
        </Container>
    );
}
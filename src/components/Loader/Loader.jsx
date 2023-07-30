import {FallingLines} from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <Wrapper>
            <FallingLines
                color='#4fa94d'
                width='100'
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </Wrapper>
    )
}
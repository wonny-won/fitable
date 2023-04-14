import styled from "@emotion/styled";

interface FileInputProps{
    isEdit: boolean;
}

export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 18px;
    padding-bottom: 5px;
    margin: 0;
`
export const EditBt = styled.div`
    padding: 0 3px;
    margin-left: 10px;
    border: 1px solid #1c1c1c;
    &:hover{
        background-color: #1c1c1c;
        color: #fff;
        cursor: pointer;
    }
` 
export const Line = styled.hr`
    background-color: #1c1c1c;
    border: none;
    width: 100%;
    height: 1px;
`
export const Section = styled.section`
    padding-top: 5px;
    margin-bottom: 30px;
`
export const MiniSection = styled.section`
    padding-bottom: 30px;
    font-family: 'SUIT-Regular';
`
export const MiniTitle = styled.h2`
    font-size: 15px;
    font-family: 'NeoDunggeunmoPro-Regular';
`
export const ProgramWrap = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Textarea =  styled.textarea`
    border: none;
    border: 1.5px solid #1c1c1c;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 100px;
    padding: 10px;
`
export const FileInput = styled.input`
    display: ${(props:FileInputProps) => !props.isEdit ? 'none':'block'};
`
export const Text = styled.h3`
    font-size: 13px;
    font-family: 'SUIT-Regular';
    padding: 0 25px 0 5px;
`
export const SubmitBt = styled.div`
    font-size: 15px;
    padding: 5px 30px;
    display:${(props:FileInputProps) => props.isEdit ? 'inline' : 'none'} ;
    border: 1.5px solid #1c1c1c;
    border-radius: 4px;
    margin: 32%;
    &:hover{
        cursor: pointer;
        background-color: #1c1c1c;
        color: #fff;
    }
`
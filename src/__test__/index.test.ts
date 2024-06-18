import { checkEmail } from '../commons/util/functions/validation';

describe('validation - checkEmail', ()=>{
    it('제대로 된 이메일을 넣을 경우 true가 나오도록 한다.', async ()=>{
        const trueEmail = await checkEmail('jaake@gmail.com');
        
        expect(trueEmail).toBe(true);
    });
    
    it('. 뒤를 입력하지 않은 경우 false가 나오도록 한다.', async ()=>{
        const falseEmail = await checkEmail('jaake@gmail.');
        
        expect(falseEmail).toBe(false);
    })

    it('@ 뒤를 입력하지 않은 경우 false가 나오도록 한다.', async ()=>{
        const falseEmail = await checkEmail('jaake@');
        
        expect(falseEmail).toBe(false);
    })
    
    it('@를 입력하지 않은 경우 false가 나오도록 한다.', async ()=>{
        const falseEmail = await checkEmail('jaake.com')
        
        expect(falseEmail).toBe(false);
    })
    
    it('@과 .를 입력하지 않은 경우 false가 나오도록 한다.', async ()=>{
        const falseEmail = await checkEmail('jaake')
        
        expect(falseEmail).toBe(false);
    })

    it('@를 입력하지 않은 경우 false가 나오도록 한다.', async ()=>{
        const falseEmail = await checkEmail('');
        
        expect(falseEmail).toBe(false);
    })
})
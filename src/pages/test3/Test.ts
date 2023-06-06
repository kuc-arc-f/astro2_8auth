import LibTest from '../../lib/LibTest';

const Test = {
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
    } catch (e) {
      console.error(e);
    }    
  } 
}
//
Test.startProc();

export default Test;

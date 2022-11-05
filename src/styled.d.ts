// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColorP:string;
    textColorH:string;
    bgColor:string;
    buttonColor:string;
  }
}
import ConstruktorStamps from "./components/ConstructorStamps/ConstructorStamps";
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
function App() {

  // const theme = extendTheme({
  //   styles: {
  //     global: {
  //       body: {
  //         bg: 'gray.200',
  //       },
  //     },
  //   },
  // })

  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <ConstruktorStamps/>
     </ChakraProvider>
  );
}

export default App;

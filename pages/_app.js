import '../styles/globals.css'
//funcao app que recebe componente da rota atual e as propriedades
//que propriedades sao essas?
export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />
}

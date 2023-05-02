import { User } from '@/components/User';
import Link from 'next/link'
import { Suspense } from 'react';

// Para validar a página como um todo (SSG):
export const revalidate = 30;

// SEO por página com metatags
export const metadata = {
  title: // 'Home Title XD' // Modo estático
  { // Modo dinâmico
    default: 'Application',
    template: '%s | Application'
  }
}

export default async function Home() {
  //Next 13 Fetching: [CSR, SSR, SSG]
  const response = await fetch('https://api.github.com/users/gabrielzolk', {
    next: {
      revalidate: 30, // Para revalidar apenas este Fetch (SSG) 
    },
    cache: 'no-store' // force-cache [1 cache pra vários usuários] / no-store [1 cache para 1 usuário] (SSR)
  })
  const user =  await response.json()


  return (
    <div>
      <h1>Hello</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href='/newroute'>Dashboard</Link>
      <Suspense fallback={<p>Carregando conteúdo</p>}>
      {/* @ts-expect-error Async Server Component */}
      <User />
      </Suspense>
      {/* Suspense API anula o comportamento padrão do nextjs que espera que todas as requisições sejam resolvidas para exibir a página inteira, fazendo com que apenas o componente que ainda não carregou fique sem exibir, já exibindo o restante da página (É uma alternativa mais moderna para o arquivo 'loading') */}
      {/* SSR streaming - Ler ou escrever parcialmente dados na tela */}
    </div>
  )
}



//Next 12 Fetching:

// Chamada estática

// export const getStaticProps

// Chamada SSR

// export const getServerSideProps



// Request Waterfall - Fetch de danos síncrono entre componentes pais e filhos: Resolvido no Next 13
// Dica: Ao fazer requests paralelos dentro de um mesmo componente mas que não dependem um do outro, usar Promise.all:

// export async function HomePromiseAll() {
//   const [response1, response2] = await Promise.all([
//     fetch(''),
//     fetch(''),
//   ])
  
// }

// Deduplicação de Request - É possível fazer a mesma requisição em locais diferentes, que o next reconhece que são iguais e faz então apenas uma requisição na primeira chamada e apenas compartilha o resultado da primeira com as chamadas restantes


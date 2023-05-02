interface ProductProps {
    params:{
        id: string
    }
}

// SEO por página com metatags
// export const metadata = {
//     title: 'Logout' // Modo estático
//   }

// SEO por página com metatags
export async function generateMetadata({ params }: ProductProps) {
    return {
        title: `Zolk | Produto ${params.id}`
    }
  }

export default function Product({ params }: ProductProps) {
    return (
        <div>
            Product: {params.id}
        </div>
    )
}

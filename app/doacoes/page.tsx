import Script from 'next/script'
import type { Metadata } from 'next'
import CopyPix from './CopyPix'

export const metadata: Metadata = {
  title: 'Doações — Felipe Padilha',
  description: 'Apoie o blog e os conteúdos de tecnologia. Pix e assinatura via Mercado Pago.',
}

export default function DoacoesPage() {
  const pixKey = '43991243124'

  return (
    <>
      {/* Mercado Pago render script */}
      <Script
        id="mp-render"
        src="https://secure.mlstatic.com/mptools/render.js"
        strategy="afterInteractive"
      />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight">Apoie meu Trabalho</h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          Se os artigos, tutoriais e vídeos te ajudam no dia a dia com Linux, redes, e
          infraestrutura, considere apoiar este projeto. Sua contribuição me permite manter o blog
          no ar, produzir conteúdos mais ricos, laboratórios mais complexos e sempre trazer
          novidades.
        </p>

        <section className="mt-10 space-y-6">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Assinatura mensal</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Assine via Mercado Pago e ajude a manter uma produção constante de conteúdos. Você
              pode cancelar quando quiser.
            </p>

            {/* Botão Mercado Pago (estilizado em Tailwind, sem styled-jsx) */}
            <div className="mt-4">
              <a
                href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=d4e635cc9d414d4886b4177d6796750f"
                className="inline-block rounded bg-[#3483FA] px-6 py-2 text-[16px] font-medium text-white transition-colors hover:bg-[#2a68c8]"
              >
                Assinar
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <h2 className="mb-2 text-2xl font-bold">Doação via Pix</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Para doações únicas e rápidas, use a chave Pix abaixo.
            </p>
            <CopyPix pixKey={pixKey} />
          </div>

          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <h2 className="mb-2 text-2xl font-bold">Para onde vai o apoio?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              O suporte cobre custos de infraestrutura (servidores, domínio, SaaS de edição e
              publicação), laboratório técnico (VMs, roteadores e equipamentos de rede para testes
              práticos), além de tempo de pesquisa, roteiro e edição. Com isso, você me ajuda a
              trazer conteúdos melhores, mais frequentes e com exemplos reais de produção.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <h2 className="mb-2 text-2xl font-bold">Obrigado!</h2>
          </div>
        </section>
      </main>
    </>
  )
}

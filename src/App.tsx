import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Play, 
  ShieldCheck, 
  Leaf, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  BookOpen,
  Star,
  X
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <span className="font-serif text-xl font-bold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-orange-500" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-700 leading-relaxed font-sans text-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const InfoModal = ({ title, isOpen, onClose, children }: { title: string, isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="font-serif text-2xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto text-gray-700 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (e: React.MouseEvent, modalId: string) => {
    e.preventDefault();
    setActiveModal(modalId);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24 md:pb-0">
      
      {/* 1. Impact Headline */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900 mb-6 text-balance tracking-tight">
          O Protocolo de 14 Dias que <span className="text-red-700">"destrava"</span> o sistema digestivo das populações mais longevas do Brasil
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium leading-relaxed">
          Como restaurar sua vitalidade natural sem dietas extremas ou laxantes agressivos.
        </p>
        <div className="w-full max-w-3xl mx-auto aspect-video bg-gray-100 rounded-xl shadow-2xl relative overflow-hidden flex items-center justify-center cursor-pointer border-4 border-white ring-1 ring-gray-200 group">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200&h=675" 
            alt="Vídeo de Apresentação" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.5)] group-hover:scale-110 transition-transform">
              <Play className="text-white ml-2 w-10 h-10 md:w-12 md:h-12 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Storytelling / O Problema */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center leading-tight">
          O que os moradores de Canaã (MG) e Mucugê (BA) sabem e nós esquecemos?
        </h2>
        <p>
          Imagine acordar sentindo-se leve, com energia de sobra, exatamente como você se sentia há 20 anos.
        </p>
        <p>
          Para muitos, hoje a rotina é outra: inchaço após cada refeição, a sensação de que o corpo está "travado" e a frustração de tentar dietas ricas em fibras que, paradoxalmente, parecem piorar o quadro.
        </p>
        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
          <h3 className="font-bold text-red-800 text-2xl mb-3">O Verdadeiro Inimigo: O Biofilme Adeso</h3>
          <p className="text-red-900 text-base md:text-lg">
            Ele é como um lodo espesso que se acumula nas paredes intestinais ao longo dos anos. <strong>Você não está com preguiça ou com metabolismo lento</strong>; seu sistema está mecanicamente obstruído por algo que a medicina industrial ignora.
          </p>
        </div>
      </section>

      {/* 3. O Mecanismo Único */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            O Ritual dos 30 segundos que ativa o seu <span className="text-orange-600">"Motor Biológico"</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 text-center leading-relaxed">
            A ciência agora confirma: o <strong>Reflexo Gastrocólico</strong> é o maestro da sua digestão. O ebook "O Código da Longevidade Brasileira" revela o método prático usado por centenários para ativar esse reflexo diariamente.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 border-t-4 border-t-orange-500">
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">A Técnica dos 35°</h4>
              <p className="text-gray-600">Por que a forma exata como você se senta dita a eficiência total da eliminação diária, liberando o músculo correto.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 border-t-4 border-t-orange-500">
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">O Shot de Acidez Ancestral</h4>
              <p className="text-gray-600">Como preparar o "lubrificante natural" de baixo custo (à base de quiabo e limão) que dissolve o biofilme suavemente.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 border-t-4 border-t-orange-500">
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">A Regra 80/20</h4>
              <p className="text-gray-600">Como comer de tudo um pouco, sem restrições severas, sacrificando a inflamação, não a sua microbiota.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prova Social e Autoridade */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-10">
          O que dizem os primeiros praticantes
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex text-yellow-400 mb-3">
              <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
            </div>
            <p className="italic text-gray-700 mb-4">"Já na primeira semana eu senti uma leveza que não sentia há anos. O inchaço depois do almoço simplesmente desapareceu."</p>
            <p className="font-bold text-gray-900">- Maria F., 54 anos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex text-yellow-400 mb-3">
              <Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" />
            </div>
            <p className="italic text-gray-700 mb-4">"Cortar laxantes era meu sonho. O ritual dos 30 segundos parece mágica, mas é pura biologia. Meu nível de energia mudou completamente."</p>
            <p className="font-bold text-gray-900">- Roberto S., 61 anos</p>
          </div>
        </div>
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest bg-gray-100 inline-block px-4 py-2 rounded-full">
          Protocolo fundamentado em estudos sobre microbiota ancestral e a fisiologia do trato gastrointestinal humano.
        </p>
      </section>

      {/* 5. A Oferta + Garantia */}
      <section id="offer" className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="border-4 border-orange-500 rounded-3xl p-8 md:p-12 text-center bg-gray-800 relative shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-lg">
              Acesso Imediato
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              O acesso completo ao Código da Longevidade Brasileira
            </h2>
            
            <ul className="text-left max-w-md mx-auto space-y-4 mb-8 text-gray-200 text-lg">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> O Protocolo de 14 dias (Limpeza, Semeadura e Blindagem)</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> O Ritual de Ativação Matinal</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> <strong>BÔNUS:</strong> O Guia da Suplementação de Magnésio</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400 shrink-0" /> <strong>BÔNUS:</strong> Manual de Infusões Noturnas</li>
            </ul>

            <div className="mb-8">
              <span className="text-red-400 line-through text-lg block mb-1">Preço Normal: R$ 147,00</span>
              <div className="flex items-center justify-center gap-2 text-5xl md:text-7xl font-black text-white">
                <span className="text-3xl">R$</span>37,90
              </div>
              <p className="text-orange-300 font-medium mt-2">Valor promocional sujeito a encerramento hoje.</p>
            </div>

            <a href="#" className="block w-full max-w-lg mx-auto bg-green-500 hover:bg-green-400 text-gray-900 py-5 px-6 rounded-xl text-xl md:text-2xl font-black uppercase tracking-tight shadow-[0_8px_0_rgb(21,128,61)] hover:shadow-[0_4px_0_rgb(21,128,61)] hover:translate-y-1 transition-all">
              SIM! QUERO ACESSAR O CÓDIGO DA LONGEVIDADE AGORA
            </a>
            
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400 bg-gray-900/50 p-4 rounded-xl border border-gray-700">
              <ShieldCheck className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="font-bold text-white text-base">Sua Jornada de 14 Dias Sem Risco Total</p>
                <p>Se dentro de 7 dias você não sentir o seu sistema funcionando de forma natural e leve, nós devolveremos cada centavo. Sem burocracia, sem perguntas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <footer className="bg-white py-12 px-6 text-center text-gray-500 text-xs md:text-sm border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 font-medium">
            <a href="#" onClick={(e) => openModal(e, 'terms')} className="hover:text-gray-900 underline">Termos de Serviço</a>
            <a href="#" onClick={(e) => openModal(e, 'privacy')} className="hover:text-gray-900 underline">Política de Privacidade</a>
            <a href="#" onClick={(e) => openModal(e, 'refund')} className="hover:text-gray-900 underline">Política de Reembolso</a>
            <a href="#" onClick={(e) => openModal(e, 'contact')} className="hover:text-gray-900 underline">Contato</a>
          </div>
          <p className="leading-relaxed mb-4">
            Disclaimer de Resultados: Os métodos e informações contidos neste site e nos produtos associados baseiam-se na experiência pessoal do autor e em pesquisas independentes. Os resultados são individuais e variam de pessoa para pessoa. Este produto não substitui o parecer médico profissional. Consulte sempre seu médico antes de iniciar qualquer mudança dietética ou de estilo de vida.
          </p>
          <p className="font-bold">
            © 2026 O Código da Longevidade Brasileira. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <InfoModal title="Termos de Serviço" isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)}>
        <p className="font-bold text-gray-900 mt-4">1. Aceitação dos Termos</p>
        <p>Ao acessar e usar este site e seus produtos associados, você concorda em cumprir e estar vinculado a estes Termos de Serviço.</p>
        
        <p className="font-bold text-gray-900 mt-4">2. Natureza Educacional</p>
        <p>Todo o conteúdo deste site, incluindo textos e guias, tem finalidade estritamente educacional e informativa. <strong>Nenhuma informação substitui o aconselhamento médico profissional, diagnóstico ou tratamento.</strong></p>
        
        <p className="font-bold text-gray-900 mt-4">3. Resultados e Expectativas</p>
        <p>Os resultados apresentados são baseados em pesquisas e práticas individuais. Não garantimos resultados específicos, pois eles podem variar de acordo com o metabolismo, adesão ao método e histórico de saúde de cada pessoa.</p>
        
        <p className="font-bold text-gray-900 mt-4">4. Propriedade Intelectual</p>
        <p>Todo o material distribuído (eBooks, textos, imagens) é de propriedade intelectual exclusiva e é expressamente proibida sua reprodução, distribuição ou comercialização sem autorização prévia por escrito.</p>
        
        <p className="font-bold text-gray-900 mt-4">5. Modificações</p>
        <p>Reservamo-nos o direito de modificar o conteúdo do site, preços e estes termos a qualquer momento, sem aviso prévio.</p>
      </InfoModal>

      <InfoModal title="Política de Privacidade" isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)}>
        <p className="font-bold text-gray-900 mt-4">1. Coleta de Dados</p>
        <p>Coletamos nome e e-mail apenas quando você realiza uma compra ou se cadastra para receber nossas comunicações. Dados de pagamento são processados por plataformas terceirizadas seguras e não temos acesso aos números de seu cartão de crédito.</p>
        
        <p className="font-bold text-gray-900 mt-4">2. Uso das Informações (Em conformidade com a LGPD)</p>
        <p>Utilizamos seu e-mail primariamente para entregar o produto digital adquirido ("O Código da Longevidade Brasileira" e seus bônus) e para enviar atualizações relevantes. Você pode cancelar sua inscrição a qualquer momento nos e-mails recebidos.</p>
        
        <p className="font-bold text-gray-900 mt-4">3. Proteção e Compartilhamento</p>
        <p>Seus dados estão protegidos. <strong>Nós nunca vendemos, alugamos ou compartilhamos suas informações pessoais</strong> com empresas terceiras para fins de marketing. O compartilhamento ocorre apenas com serviços essenciais para a operação (ex: gateway de pagamento).</p>
        
        <p className="font-bold text-gray-900 mt-4">4. Cookies</p>
        <p>Utilizamos cookies para melhorar a experiência de navegação e para fins analíticos básicos (como entender quais seções do site são mais acessadas).</p>
      </InfoModal>

      <InfoModal title="Política de Reembolso" isOpen={activeModal === 'refund'} onClose={() => setActiveModal(null)}>
        <p className="font-bold text-gray-900 mt-4">Nossa Garantia de 7 Dias</p>
        <p>Temos total confiança no método apresentado. Por isso, oferecemos uma garantia incondicional de 7 (sete) dias, conforme o Código de Defesa do Consumidor para compras online.</p>
        
        <p className="font-bold text-gray-900 mt-4">Como solicitar:</p>
        <p>Se por qualquer motivo dentro do prazo legal de 7 dias após a compra você não ficar satisfeito com o conteúdo, basta nos enviar um e-mail com a solicitação.</p>
        <p><strong>Prazo de processamento:</strong> O reembolso será processado e o acesso ao material será revogado. O tempo para que o valor retorne à sua fatura ou conta depende da operadora do cartão de crédito ou do método de pagamento utilizado.</p>
      </InfoModal>

      <InfoModal title="Contato e Suporte" isOpen={activeModal === 'contact'} onClose={() => setActiveModal(null)}>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 text-center mt-4">
          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            Tem alguma dúvida, precisa de suporte com seu pedido ou quer solicitar o reembolso dentro do prazo de garantia?
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 inline-block mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">E-mail Oficial de Suporte</p>
            <a href="mailto:vdlmarketdigital@gmail.com" className="text-2xl font-serif font-bold text-orange-600 hover:text-orange-700 transition-colors">
              vdlmarketdigital@gmail.com
            </a>
          </div>
          <p className="text-sm text-gray-600">
            <strong>Horário de Atendimento:</strong> Segunda a Sexta-feira, das 09h às 18h.<br/>
            Procuramos responder todas as mensagens em um prazo de <strong>24 a 48 horas úteis</strong>.
          </p>
        </div>
      </InfoModal>

      {/* Mobile Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 z-50 md:hidden shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] flex justify-center">
         <a href="#offer" className="w-full bg-green-500 hover:bg-green-600 text-gray-900 py-4 rounded-xl text-center font-black text-lg shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-tight">
            ACESSAR O CÓDIGO AGORA
         </a>
      </div>
    </div>
  );
}
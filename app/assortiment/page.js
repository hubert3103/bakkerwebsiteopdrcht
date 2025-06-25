import Image from 'next/image'

const products = {
  brood: [
    {
      name: 'Wit Brood',
      description: 'Klassiek witbrood, luchtig en zacht van binnen met een knapperige korst',
      price: '€2,95'
    },
    {
      name: 'Volkoren',
      description: 'Gezond volkorenbrood rijk aan vezels, gebakken met 100% volkorenmeel',
      price: '€3,25'
    },
    {
      name: 'Zuurdesem',
      description: 'Ambachtelijk zuurdesembrood met een rijke smaak en krokante korst',
      price: '€3,95'
    }
  ],
  gebak: [
    {
      name: 'Appelgebak',
      description: 'Vers gebakken appelgebak met kaneel en rozijnen',
      price: '€2,75'
    },
    {
      name: 'Slagroomtaart',
      description: 'Luchtige vanilletaart gevuld met verse slagroom',
      price: '€16,95'
    },
    {
      name: 'Chocolade Muffins',
      description: 'Zachte chocolade muffins met stukjes pure chocolade',
      price: '€2,50'
    }
  ],
  koekjes: [
    {
      name: 'Boterkoekjes',
      description: 'Traditionele Nederlandse boterkoekjes',
      price: '€4,95'
    },
    {
      name: 'Gevulde Koeken',
      description: 'Huisgemaakte gevulde koeken met amandelspijs',
      price: '€2,25'
    },
    {
      name: 'Chocolate Chip Cookies',
      description: 'Knapperige cookies met stukjes melkchocolade',
      price: '€1,95'
    }
  ]
}

const imageMap = {
	'Wit Brood': '/wit_brood.jpg',
	'Volkoren': '/volkoren_brood.jpeg',
	'Zuurdesem': '/Zuurdesem_brood.jpg',
	'Appelgebak': '/appeltaart.jpg',
	'Slagroomtaart': '/slagroomtaart.jpg',
	'Chocolade Muffins': '/chocolade_muffins.jpg',
	'Boterkoekjes': '/boterkoekje.jpg',
	'Gevulde Koeken': '/Gevulde-koeken.jpg',
	'Chocolate Chip Cookies': '/choco_cookies_1920x1080.jpg',
}

export default function Assortiment() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-amber-800">Ons Assortiment</h1>
        <p className="text-xl text-amber-700">Ontdek onze verse producten</p>
      </section>

      <div className="space-y-16">
        {/* Brood sectie */}
        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">Brood</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.brood.map((product) => (
              <div key={product.name} className="bg-white p-6 rounded-lg shadow-md">
                {imageMap[product.name] && (
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={imageMap[product.name]}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-amber-700">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-amber-800 font-medium mt-4">{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gebak sectie */}
        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">Gebak</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.gebak.map((product) => (
              <div key={product.name} className="bg-white p-6 rounded-lg shadow-md">
                {imageMap[product.name] && (
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={imageMap[product.name]}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-amber-700">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-amber-800 font-medium mt-4">{product.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Koekjes sectie */}
        <section>
          <h2 className="text-2xl font-semibold text-amber-800 mb-6">Koekjes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.koekjes.map((product) => (
              <div key={product.name} className="bg-white p-6 rounded-lg shadow-md">
                {imageMap[product.name] && (
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src={imageMap[product.name]}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-amber-700">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-amber-800 font-medium mt-4">{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-amber-800">Welkom bij Het witte bolletje</h1>
        <p className="text-xl text-amber-700">Ambachtelijk brood en gebak, vers voor u gebakken</p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/bakkerij_voorkant.jpg"
            alt="Voorkant van bakkerij Het witte bolletje"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-amber-800">Onze Bakkerij</h2>
          <p className="text-gray-700">
            Al meer dan 30 jaar staat bakkerij Het witte bolletje bekend om haar 
            ambachtelijke broden en heerlijk gebak. Elke dag staan onze bakkers vroeg op 
            om verse producten te maken met de beste ingrediënten.
          </p>
          <p className="text-gray-700">
            Bij ons vindt u een uitgebreid assortiment aan broden, van klassiek 
            witbrood tot specialiteiten zoals speltbrood en zuurdesem. Daarnaast 
            maken we dagelijks vers gebak en heerlijke taarten voor elke gelegenheid.
          </p>
          <p className="text-gray-700">
            Kom langs in onze winkel en ervaar zelf de geur en smaak van vers gebakken brood!
          </p>
        </div>
      </div>

      <section className="bg-amber-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">Openingstijden</h2>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div>
            <p className="font-medium">Maandag t/m vrijdag</p>
            <p className="text-gray-700">07:00 - 18:00</p>
          </div>
          <div>
            <p className="font-medium">Zaterdag</p>
            <p className="text-gray-700">07:00 - 16:00</p>
          </div>
          <div className="col-span-2">
            <p className="font-medium">Zondag</p>
            <p className="text-gray-700">Gesloten</p>
          </div>
        </div>
      </section>
    </div>
  );
}

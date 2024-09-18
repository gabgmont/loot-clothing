import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-16 px-8 bg-black text-white text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4'>
          <Link href='/' className='flex items-center gap-4'>
            <Image src='./images/logo.svg' alt='Loot Logo' width={16} height={16} className='cursor-pointer'></Image>
            <div className='text-2xl tracking-wide font-bold'>Loot</div>
          </Link>
          <p>Rua Iguape, 5 - Ribeirão Preto - SP</p>
          <span className='font-semibold'>lootclothing@gmail.com</span>
          <span className='font-semibold'>+55 11 98765-4321</span>
          <div className='flex gap-6'>
            <Image src='/images/ig_logo.png' alt='' width={24} height={24}></Image>
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/3'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-medium text-lg'>AJUDA</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Entrega e frete</Link>
              <Link href=''>Trocas e devoluções</Link>
              <Link href=''>Política de Privacidade</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>Vista-se com Loot e faça parte de uma revolução que está redefinindo o futuro da moda.</p>
          <div className='flex'>
            <input 
              type='text'
              placeholder='Email'
              className='p-4 w-3/4'/>
            <button className='w-1/4 bg-accent text-black font-semibold'>JOIN</button>
          </div>
          <span>Secure Payments</span>
          <div className='flex gap-4'>
            <Image src='/images/mastercard_logo.png' alt='' width={24} height={24}></Image>
            <Image src='/images/visa_logo.png' alt='' width={24} height={24}></Image>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div>Loot - Todos os direitos reservados</div>
        <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
          <div>
            <span className='text-neutral mr-4'>Idioma</span>
            <span className='font-medium'>Brasil | Português</span>
          </div>
          <div>
            <span className='text-neutral mr-4'>Moeda</span>
            <span className='font-medium'>R$ BRL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
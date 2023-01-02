import React from 'react'
import Head from "next/head";

export default function CustomHead({title = "The Brand Global" }) {
  return (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap" rel="stylesheet"/>
    </Head>
  )
}

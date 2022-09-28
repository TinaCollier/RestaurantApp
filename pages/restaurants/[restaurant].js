import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Restaurant() {
  const router = useRouter();
  return (
    <h1>Restaurant Dynamic Page { router.query.restaurant }</h1>
  )
}
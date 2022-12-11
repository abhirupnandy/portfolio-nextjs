import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>My Portfolio</title>
				<meta name='description' content='My portfolio website created in NextJS' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</div>
	);
}

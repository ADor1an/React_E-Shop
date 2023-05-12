import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
// import {useNavigate} from "react-router";
import {CSSTransition, TransitionGroup} from "react-transition-group"; //libs
import classes from './App.module.css'
import Footer from './components/Footer/Footer';
// import HeaderTwo from "./components/Header/HeaderTwo";
import HeaderThree from "./components/Header/HeaderThree";// components
import MBP14 from './images/ProductsImage/MB_pro_14_m1.jpg'
import MBP16 from './images/ProductsImage/MB_pro_16_m1.jpg'
import MBP13 from './images/ProductsImage/MB_pro_13_m1.jpg'
import MBA from './images/ProductsImage/MB_air_m1.jpg'
import MBP_I_16 from './images/ProductsImage/MB_pro_16.jpg'
import HomePage from "./pages/HomePage";
import {About} from "./pages/About";
import Products from "./pages/Products";
import Accessories from "./pages/Accessories";
import {Contacts} from "./pages/Contacts";
import Monoblocks from "./pages/prdcts/Monoblocks";
import MacPro from "./pages/prdcts/MacPro";
import MacStudios from "./pages/prdcts/MacStudios";
import MacMini from "./pages/prdcts/MacMini";
import Displays from "./pages/prdcts/Displays";
import Macbooks from "./pages/prdcts/Macbooks";
import Cabinet from "./pages/Cabinet";
//pages



export default function App () {

    const location = useLocation();
    const isForward = location.state?.direction === 'forward';

    const [basket, setBasket] = useState([])
    const [displays, setDisplays ] = useState([
        {
        id:1,
        title: 'Studio Display',
        diagonal: '27 inch Retina display',
        resolution: '5120 by 2880 pixels\n' +
            'Retina display\n' +
            '\n' +
            '218 ppi',
        bright: '600',
        tech: 'True Tone\n' +
            '\n' +
            'Anti-reflective coating\n' +
            '\n' +
            'Nano-texture glass option',
        // tech: 'True Tone, Anti-reflective coating, Nano-texture glass option',
        camera: '12MP Ultra Wide camera with Center Stage',
        speakers: 'Studio‑quality three‑mic array\n' +
            '\n' +
            'Six-speaker sound system with Spatial Audio',
        ports: 'Three USB-C ports for your accessories\n' +
            '\n' +
            'One Thunderbolt 3 port to connect and charge your compatible Mac',
        dif: 'Tilt-adjustable stand\n' +
            '\n' +
            'Tilt- and height-adjustable stand option\n' +
            '\n' +
            'VESA mount adapter option',
        // image: 'https://mysterio.yahoo.com/api/res/1.2/uVo4mXbSeycQ6X7TkgwYqg--/ZHByPTI7dz04NzU7YXBwaWQ9ZW5nYWRnZXQ-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/b235b300-aabc-11ec-bc97-96c626c995fd.cf.webp',
        img: 'https://images.unsplash.com/photo-1650169075825-1ee9efe6e66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1902&q=80',

    },
        {
            id: 2,
            title: 'Pro Display XDR',
            diagonal: '32 inch \n' +
                'Retina XDR display1\n' +
                '\n' +
                '',
            resolution: '6016 by 3384 pixels\n' +
                'Retina display\n' +
                '\n' +
                '218 ppi',
            bright: '1600',
            tech: 'True Tone\n' +
                '\n' +
                'Anti-reflective coating\n' +
                '\n' +
                'Nano-texture glass option',
            // tech: 'True Tone, Anti-reflective coating, Nano-texture glass option',
            camera: null == '—',
            speakers: 'Studio‑quality three‑mic array\n' +
                '\n' +
                'Six-speaker sound system with Spatial Audio',
            ports: 'Three USB-C ports for your accessories\n' +
                '\n' +
                'One Thunderbolt 3 port to connect and charge your compatible Mac',
            dif: 'Pro Stand option\n' +
                '\n' +
                'VESA mount adapter option',
            img: 'https://images.unsplash.com/photo-1616711414401-b69525289754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        },
        {
            id: 3,
            title: 'Dell U3023E',
            diagonal: '30 inch WQXGA display',
            resolution: '2560 x 1600 pixels',
            bright: '400 ',
            tech: 'LowBlue Mode\n' +
                '\n' +
                'Flicker-free\n' +
                '\n' +
                'EasyRead\n' +
                '\n' +
                'Adaptive sync',
            // tech: 'True Tone, Anti-reflective coating, Nano-texture glass option',
            camera: null,
            speakers: '3.5 mini-jack',
            ports: 'HDMI (HDCP 1.4)\n' +
                '\n' +
                '                    DisplayPort 1.4\n' +
                '\n' +
                'DisplayPort output\n' +
                '\n' +
                'USB-C upstream/DisplayPort 1.4 Alt Mode with Power Delivery (power up to 90W, HDCP 2.2)\n' +
                '\n' +
                'USB-C 3.2 Gen 2 upstream\n' +
                '\n' +
                ' USB-C 3.2 Gen 2 downstream (power up to 15W)\n' +
                '\n' +
                '  3 x USB 3.2 Gen 2 downstream\n' +
                '\n' +
                ' USB 3.2 Gen 2 downstream with Battery Charging 1.2\n' +
                '\n' +
                ' Audio line-out (mini-jack)\n' +
                '\n' +
                'LAN (RJ-45)',
            dif: 'Height\n' +
                '\n' +
                ' pivot (rotation)\n' +
                '\n' +
                ' swivel\n' +
                '\n' +
                ' tilt',
            img: 'https://eusupplies.com/wp-content/uploads/overlay_ffbb9b3f6a9354a5c6dfbb4301c92db8.jpeg',
        },
        {
            id: 4,
            title: 'Philips 439P1',
            diagonal: '42.51 inch 4k × 2k',
            resolution: '3840 x 2160 pixels',
            bright: '400',
            tech: 'Flicker-Free\n' +
                '\n' +
                'LowBlue Mode\n' +
                '\n' +
                'EasyRead',
            // tech: 'True Tone, Anti-reflective coating, Nano-texture glass option',
            camera: '12MP Ultra Wide camera with Center Stage',
            speakers: '2×5 Watt speakers\n' +
                '\n' +
                '3.5 mini-jack',
            ports: 'HDMI (HDCP 1.4/2.2)\n' +
                '\n' +
                'DisplayPort 1.4 (HDCP 2.2)\n' +
                '\n' +
                'HDMI 1.4 × 2 \n' +
                '\n' +
                'USB-C upstream/DisplayPort 1.4 Alt Mode with Power Delivery (power up to 90W, HDCP 2.2)\n' +
                '\n' +
                ' USB-C downstream (power up to 15W)\n' +
                '\n' +
                ' USB 3.2 × 3 downstream with Battery Charging 1.2\n' +
                '\n' +
                ' Audio line-out (mini-jack)\n' +
                '\n' +
                'LAN (RJ-45) 1 Gigabit',
            dif: null == '—'
            // 'Tilt-adjustable stand\n' +
            //     '\n' +
            //     'Tilt- and height-adjustable stand option\n' +
            //     '\n' +
            //     'VESA mount adapter option'
            ,
            img: 'https://era-elektroniki.com.ua/img/components/monitors/233066/philips-439p1-00-233066_1.jpg'
        },
        {
            id: 5,
            title: 'LG 43UN700',
            diagonal: '43 inch Retina display',
            resolution: '5120 by 2880 pixels',
            bright: '400',
            tech: 'Dynamic Action Sync\n' +
                '\n' +
                'Reader Mode\n' +
                '\n' +
                'Black Stabilizer\n' +
                '\n' +
                'Flicker Safe\n' +
                '\n' +
                'Super Resolution+\n' +
                '\n' +
                'Nano-texture glass option',
            // tech: 'True Tone, Anti-reflective coating, Nano-texture glass option',
            camera: '12MP Ultra Wide camera with Center Stage',
            speakers: '2 × 5 Watt\n' +
                '\n' +
                'Six-speaker sound system with Spatial Audio',
            ports: 'USB Type-C with alt—mode and 60w power delivery\n' +
                '\n' +
                'DisplayPort × 1\n' +
                '\n' +
                'HDMI × 4 (v 2.0)\n' +
                '\n' +
                'Headphone Out\n' +
                'USB Down-stream × 2',
            dif: 'VESA mount adapter option',
            img: 'https://www.lg.com/ru/images/monitors/MNT-43UN700-12-2-1-MediaCreation-Usage-D.jpg',
        },])
    const [macbooks, setMacbooks ] = useState([
            {
                id:1,
                title: 'Macbook Pro 14" M1 pro max',
                // img: 'MB_pro_14_m1.jpg',
                // img: 'MB_pro_14_m1.jpg',
                img: MBP14,
                description: 'lorem ipsum dolor sit amet.',
                category: 'Laptop',
                price: '1499$',
                alt: 'Image Macbook Pro 14" M1 pro max',
                colorFirst: 'Silver',
                colorSecond: 'Space Gray',
                chipF: '8-core CPU with 6 performance cores and 2 efficiency cores',
                chipT: '14-core GPU',
                chipTh: '16-core Neural Engine',
                mediaEngineF: 'Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW',
                mediaEngineS: 'Video decode engine',
                mediaEngineT: 'Video encode engine',
                mediaEngineFo: 'ProRes encode and decode engine',
                displaySpecsF: '14.2-inch (diagonal) Liquid Retina XDR display;1 3024-by-1964 native resolution at 254 pixels per inch XDR (Extreme Dynamic Range)',
                displaySpecsS: '1,000,000:1 contrast ratio',
                displaySpecsT: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only)',
                displaySpecsFo:  'SDR brightness: 500 nits',
                displayColorF: '1 billion colors',
                displayColorS: ' Wide color ',
                displayColorT: ' True Tone technology',
                displayRatesF: 'ProMotion technology for adaptive refresh rates up to 120Hz',
                displayRatesS: 'Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz',
                ramF: '16GB unified memory',
                ramS: 'Configurable to 32GB (M1 Pro or M1 Max) or 64GB (M1 Max)',
                storageBase: '512GB SSD',
                storageConf: 'Configurable to 1TB, 2TB, 4TB, or 8TB',
                titleColor: 'Color',
                titleChips: 'Chip',
                titleMediaCapabilities: 'MediaCapabilities',
                titleDisplay: 'Display',
                titleMemory: 'Memory'

            },
            {
                id:2,
                title: 'Macbook Pro 16" M1 pro max',
                // img: 'MB_pro_16_m1.jpg',
                // img: './images/ProductsImage/MB_pro_16_m1.jpg',
                img: MBP16,
                description: 'lorem ipsum dolor sit amet.',
                category: 'Laptop',
                price: '1599$',
                alt: 'Image Macbook Pro 16" M1 pro max',
                colorFirst: 'Silver',
                colorSecond: 'Space Gray',
                chipF: '8-core CPU with 6 performance cores and 2 efficiency cores',
                chipT: '14-core GPU',
                chipTh: '16-core Neural Engine',
                mediaEngineF: 'Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW',
                mediaEngineS: 'Video decode engine',
                mediaEngineT: 'Video encode engine',
                mediaEngineFo: 'ProRes encode and decode engine',
                displaySpecsF: '16.2-inch (diagonal) Liquid Retina XDR display;1 3024-by-1964 native resolution at 254 pixels per inch XDR (Extreme Dynamic Range)',
                displaySpecsS: '1,000,000:1 contrast ratio',
                displaySpecsT: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only)',
                displaySpecsFo:  'SDR brightness: 500 nits',
                displayColorF: '1 billion colors',
                displayColorS: ' Wide color ',
                displayColorT: ' True Tone technology',
                displayRatesF: 'ProMotion technology for adaptive refresh rates up to 120Hz',
                displayRatesS: 'Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz',
                ramF: '16GB unified memory',
                ramS: 'Configurable to 32GB (M1 Pro or M1 Max) or 64GB (M1 Max)',
                storageBase: '512GB SSD',
                storageConf: 'Configurable to 1TB, 2TB, 4TB, or 8TB',
                titleColor: 'Color',
                titleChips: 'Chip',
                titleMediaCapabilities: 'MediaCapabilities',
                titleDisplay: 'Display',
                titleMemory: 'Memory'
            },
            {
                id:3,
                title: 'Macbook Pro 13" M1',
                // img: 'MB_pro_13_m1.jpg',
                // img: './images/ProductsImage/MB_pro_13_m1.jpg',
                img: MBP13,
                description: 'lorem ipsum dolor sit amet.',
                category: 'Laptop',
                price: '1199$',
                alt: 'Image Macbook Pro 13" M1',
                colorFirst: 'Silver',
                colorSecond: 'Space Gray',
                chipF: '8-core CPU with 6 performance cores and 2 efficiency cores',
                mediaEngineF: 'Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW',
                mediaEngineS: 'Video decode engine',
                mediaEngineT: 'Video encode engine',
                mediaEngineFo: 'ProRes encode and decode engine',
                displaySpecsF: '13-inch (diagonal) Liquid Retina XDR display;1 3024-by-1964 native resolution at 254 pixels per inch XDR (Extreme Dynamic Range)',
                displaySpecsS: '1,000,000:1 contrast ratio',
                displaySpecsT: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only)',
                displaySpecsFo:  'SDR brightness: 500 nits',
                displayColorF: '1 billion colors',
                displayColorS: ' Wide color ',
                displayColorT: ' True Tone technology',
                displayRatesF: 'ProMotion technology for adaptive refresh rates up to 120Hz',
                displayRatesS: 'Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz',
                ramF: '16GB unified memory',
                ramS: 'Configurable to 32GB (M1 Pro or M1 Max) or 64GB (M1 Max)',
                storageBase: '512GB SSD',
                storageConf: 'Configurable to 1TB, 2TB, 4TB, or 8TB',
                titleColor: 'Color',
                titleChips: 'Chip',
                titleMediaCapabilities: 'MediaCapabilities',
                titleDisplay: 'Display',
                titleMemory: 'Memory'
            },
            {
                id:4,
                title: 'Macbook Air 13" M1',
                // img: 'MB_air_m1.jpg',
                // img: './images/ProductsImage/MB_air_m1.jpg',
                img: MBA,
                description: 'lorem ipsum dolor sit amet.',
                category: 'Laptop',
                price: '1099$',
                alt: 'Image Macbook Air 13" M1',
                colorFirst: 'Silver',
                colorSecond: 'Space Gray',
                chipF: '8-core CPU with 6 performance cores and 2 efficiency cores',
                chipT: '7-core GPU or 8-core GPU  ',
                mediaEngineF: 'Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW',
                mediaEngineS: 'Video decode engine',
                mediaEngineT: 'Video encode engine',
                mediaEngineFo: 'ProRes encode and decode engine',
                displaySpecsF: '13-inch (diagonal) Liquid Retina XDR display;1 3024-by-1964 native resolution at 254 pixels per inch XDR (Extreme Dynamic Range)',
                displaySpecsS: '1,000,000:1 contrast ratio',
                displaySpecsT: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only)',
                displaySpecsFo:  'SDR brightness: 500 nits',
                displayColorF: '1 billion colors',
                displayColorS: ' Wide color ',
                displayColorT: ' True Tone technology',
                displayRatesF: 'ProMotion technology for adaptive refresh rates up to 120Hz',
                displayRatesS: 'Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz',
                ramF: '16GB unified memory',
                ramS: 'Configurable to 32GB (M1 Pro or M1 Max) or 64GB (M1 Max)',
                storageBase: '512GB SSD',
                storageConf: 'Configurable to 1TB, 2TB, 4TB, or 8TB',
                titleColor: 'Color',
                titleChips: 'Chip',
                titleMediaCapabilities: 'MediaCapabilities',
                titleDisplay: 'Display',
                titleMemory: 'Memory'
            },
            {
                id:5,
                title: 'Macbook Pro 16" intel core i9',
                // img: 'MB_pro_16.jpg',
                // img: './images/ProductsImage/MB_pro_16.jpg',
                img: MBP_I_16,
                description: 'lorem ipsum dolor sit amet.',
                category: 'Laptop',
                price: '1999$',
                alt: 'Image Macbook Pro 16" intel core i9',
                colorFirst: 'Silver',
                colorSecond: 'Space Gray',
                chipF: '6-core CPU intel core i9 2.4GHz turbo-bust 5.0GHz',
                chipT: 'AMD Radeon Pro 5500M 4GB or 8GB video memory ',
                mediaEngineF: 'Hardware-accelerated H.264, HEVC, ProRes, and ProRes RAW',
                mediaEngineS: 'Video decode engine',
                mediaEngineT: 'Video encode engine',
                mediaEngineFo: 'ProRes encode and decode engine',
                displaySpecsF: '16-inch (diagonal) Liquid Retina XDR display;1 3024-by-1964 native resolution at 254 pixels per inch XDR (Extreme Dynamic Range)',
                displaySpecsS: '1,000,000:1 contrast ratio',
                displaySpecsT: 'XDR brightness: 1000 nits sustained full-screen, 1600 nits peak2 (HDR content only)',
                displaySpecsFo:  'SDR brightness: 500 nits',
                displayColorF: '1 billion colors',
                displayColorS: ' Wide color ',
                displayColorT: ' True Tone technology',
                displayRatesF: 'ProMotion technology for adaptive refresh rates up to 120Hz',
                displayRatesS: 'Fixed refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz',
                ramF: '16GB unified memory',
                ramS: 'Configurable to 32GB (M1 Pro or M1 Max) or 64GB (M1 Max)',
                storageBase: '512GB SSD',
                storageConf: 'Configurable to 1TB, 2TB, 4TB, or 8TB',
                titleColor: 'Color',
                titleChips: 'Chip',
                titleMediaCapabilities: 'MediaCapabilities',
                titleDisplay: 'Display',
                titleMemory: 'Memory'


            },
        ])
    const [mMini, setMMini ] = useState([
        {
            title: 'M2',
            processor: '8-core central processor ',
            gpu: 'Up to 10 cores in the GPU',
            ram: 'Up to 24 GB of combined memory',
            memBand: 'Memory bandwidth up to 100 GB/s',
            img: 'https://www.apple.com/v/mac-mini/r/images/overview/m2__ervje1p52cya_large.png'
        },
        {
            title: 'M2 PRO',
            processor: '12-core central processor ',
            gpu: 'Up to 19 cores in the GPU',
            ram: 'Up to 32 GB of combined memory',
            memBand: 'Memory bandwidth up to 200 GB/s',
            img: 'https://www.apple.com/v/mac-mini/r/images/overview/m2_pro__bod7oesbsble_large.png'
        },

    ])
    const [mStudio, setMStudio ] = useState( [
        {
            title: 'M1 MAX',
            processor: '10-core central processor ',
            gpu: 'Up to 32 cores in the GPU',
            ram: 'Up to 64 GB of combined memory',
            memBand: 'Memory bandwidth up to 400 GB/s',
            img: 'https://www.apple.com/v/mac-studio/a/images/overview/hero/m1_max__e3jaa7svv6ye_large.jpg'
        },
        {
            title: 'M1 ULTRA',
            processor: '20-core central processor ',
            gpu: 'Up to 64 cores in the GPU',
            ram: 'Up to 128 GB of combined memory',
            memBand: 'Memory bandwidth up to 800 GB/s',
            img: 'https://www.apple.com/v/mac-studio/a/images/overview/hero/m1_ultra__ffux5kep74mm_large.jpg'
        },
    ])
    const [macPro, setMacPro ] = useState([
        {
            title: 'Apple iMac 27" 5K 2020',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i5:(10500/10600)',
            procSecondMod: 'intel core i7:(10700K)',
            procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro 5300/5500XT/5700XT',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '5v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB/64GB/128GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: 'from 4GB in Radeon Pro 5300 to 16GB in Radeon Pro 5700XT',
            img: 'https://www.apple.com/v/mac-pro/l/images/overview/intro_front__cikbveq52o5e_large.jpg'
        },
        {
            title: 'Apple iMac 21.5" 4K 2019',
            resolution: '4096x2304 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i3:(8100B)',
            procSecondMod: 'intel core i5:(8500B)',
            procThirdMod: 'intel core i7:(8700B)',
            graphic: 'Radeon Pro 555X/560X/Vega 20',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB',
            ramSlots: 'embedded',
            ssd: 'from 256GB to 1024GB ',
            videoRam: 'from 2GB in Radeon Pro 555X to 4GB in Radeon Pro 560X and Vega 20 ',
            img: 'https://mzimg.com/big/t1/g1ggupwdyt1.jpg'
        },
        {
            title: 'Apple iMac 27" 5K 2019 ',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i5:(9600K)',
            // procSecondMod: 'intel core i7:(10700K)',
            // procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro 580X',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB/64GB/128GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048GB ',
            videoRam: '8GB',
            img: 'https://mzimg.com/big/l1/g1ggtxkjfl1.jpg'
        },
        {
            title: 'Apple iMac 27" 5K 2017',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel XEON W-2140B',
            procSecondMod: 'intel core i7:(10700K)',
            procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro Vega 56',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 4, Thunderbolt v3 - 4',
            ram: '8GB/16GB/32GB/64GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: '8GB',
            img: 'https://m.ua/jpg_zoom1/1127968.jpg'
        },
        {
            title: 'Apple iMac 24" 2021',
            resolution: '4480x2520 (16:9) Retina 4,5K ',
            bright: '500 nits',
            procFirstMod: 'Apple Silicone M1 8 cores',
            // procSecondMod: 'intel core i7:(10700K)',
            // procThirdMod: 'intel core i9:(10910)',
            graphic: 'Apple Silicone M1 7-Core/ M1 8-Core',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI6',
            bluetooth: '5v',
            ports: 'USB4 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: 'Combined memory',
            img: 'https://m.ua/jpg_zoom1/2037928.jpg'
        },
    ])
    const [monoblocks, setMonoblocks ] = useState([
        {
            title: 'Apple iMac 27" 5K 2020',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i5:(10500/10600)',
            procSecondMod: 'intel core i7:(10700K)',
            procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro 5300/5500XT/5700XT',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '5v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB/64GB/128GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: 'from 4GB in Radeon Pro 5300 to 16GB in Radeon Pro 5700XT',
            img: 'https://m.ua/jpg_zoom1/1850116.jpg'
        },
        {
            title: 'Apple iMac 21.5" 4K 2019',
            resolution: '4096x2304 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i3:(8100B)',
            procSecondMod: 'intel core i5:(8500B)',
            procThirdMod: 'intel core i7:(8700B)',
            graphic: 'Radeon Pro 555X/560X/Vega 20',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB',
            ramSlots: 'embedded',
            ssd: 'from 256GB to 1024GB ',
            videoRam: 'from 2GB in Radeon Pro 555X to 4GB in Radeon Pro 560X and Vega 20 ',
            img: 'https://mzimg.com/big/t1/g1ggupwdyt1.jpg'
        },
        {
            title: 'Apple iMac 27" 5K 2019 ',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel core i5:(9600K)',
            // procSecondMod: 'intel core i7:(10700K)',
            // procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro 580X',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB/32GB/64GB/128GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048GB ',
            videoRam: '8GB',
            img: 'https://mzimg.com/big/l1/g1ggtxkjfl1.jpg'
        },
        {
            title: 'Apple iMac 27" 5K 2017',
            resolution: '5120x2880 (16:9) Retina 5K ',
            bright: '500 nits',
            procFirstMod: 'intel XEON W-2140B',
            procSecondMod: 'intel core i7:(10700K)',
            procThirdMod: 'intel core i9:(10910)',
            graphic: 'Radeon Pro Vega 56',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI5',
            bluetooth: '4.2v',
            ports: 'USB 3.2 gen1 - 4, USB C 3.2 gen2 - 4, Thunderbolt v3 - 4',
            ram: '8GB/16GB/32GB/64GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: '8GB',
            img: 'https://m.ua/jpg_zoom1/1127968.jpg'
        },
        {
            title: 'Apple iMac 24" 2021',
            resolution: '4480x2520 (16:9) Retina 4,5K ',
            bright: '500 nits',
            procFirstMod: 'Apple Silicone M1 8 cores',
            // procSecondMod: 'intel core i7:(10700K)',
            // procThirdMod: 'intel core i9:(10910)',
            graphic: 'Apple Silicone M1 7-Core/ M1 8-Core',
            camera: '1080p FaceTime HD',
            wifi: 'WIFI6',
            bluetooth: '5v',
            ports: 'USB4 - 2, Thunderbolt v3 - 2',
            ram: '8GB/16GB',
            ramSlots: '4',
            ssd: 'from 256GB to 2048gb ',
            videoRam: 'Combined memory',
            img: 'https://m.ua/jpg_zoom1/2037928.jpg'
        },
    ])
    const links = [
        {path: '/prdcts/monoblocks',
            label: 'Monoblocks',
            currentKey: 'monoblocks',
        },
        {path: '/prdcts/macpro',
            label: 'MacPro',
            currentKey: 'macpro',
        },
        {path: '/prdcts/macstudios',
            label: 'MacStudios',
            currentKey: 'macstudios',
        },
        {path: '/prdcts/macmini',
            label: 'Macmini',
            currentKey: 'macmini',
        },
        {path: '/prdcts/displays',
            label: 'Monitors',
            currentKey: 'displays',
        },
        {path: '/prdcts/macbooks',
            label: 'Macbooks',
            currentKey: 'macbooks',
        },]

    const timeout = { enter: 500, exit: 500 };

    const [prevPath, setPrevPath] = useState(null)
    const [isBack, setIsBack] = useState(null)

    useEffect(() => {
        if (prevPath && prevPath !== location.pathname) {
            setIsBack(prevPath.localeCompare(location.pathname) < 0)
        }
        setPrevPath(location.pathname)
    }, [location, prevPath]);

    const state =  {direction: isForward ? 'back' : 'forward' }



    const getClassNames = () => {

    }

    const addToBasket = (item) => {
        setBasket((prevState) => [...prevState, item] )
    }
    return (
        <div className={classes.App}>
            {/*<Header*/}
            {/*    basket={this.state.basket}*/}
            {/*    displays={this.state.displays}*/}
            {/*    macbooks={this.state.macbooks}*/}
            {/*    mMini={this.state.mMini}*/}
            {/*    macPro={this.state.macPro}*/}
            {/*    mStudio={this.state.mStudio}*/}
            {/*    monoblocks={this.state.monoblocks}*/}
            {/*    addToBasket={this.addToBasket}*/}
            {/*/>*/}
            {/*<HeaderTwo*/}
            {/*    basket={basket}*/}
            {/*    displays={displays}*/}
            {/*    macbooks={macbooks}*/}
            {/*    mMini={mMini}*/}
            {/*    macPro={macPro}*/}
            {/*    mStudio={mStudio}*/}
            {/*    monoblocks={monoblocks}*/}
            {/*    addToBasket={addToBasket}*/}
            {/*/>*/}

            <HeaderThree
                // isForward={isForward}
                links={links}
                basket={basket}
                addToBasket={addToBasket}
                state={state}
            />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={timeout}
                    classNames={{
                     enter: isBack ? classes.slideRightEnter : classes.slideLeftEnter,
                     enterActive: isBack ? classes.slideRightEnterActive : classes.slideLeftEnterActive,
                     exit: isBack ? classes.slideLeftExit : classes.slideRightExit,
                     exitActive: isBack ? classes.slideLeftExitActive : classes.slideRightExitActive,
                    }}
                    // classNames={isBack ? 'slide-right' : 'slide-left' }
                        // classNames={{
                    //     enter: isForward ? classes.slideInRightEnter : classes.slideInLeft,
                    //     enterActive: isForward ? classes.slideInRightEnterActive : classes.slideInLeftEnterActive,
                    //     exit: isForward ? classes.slideOutLeftExit : classes.slideOutRightExit,
                    //     exitActive: isForward ? classes.slideOutLeftExitActive : classes.slideOutRightExitActive,
                    // }}
                    // classNames={{
                    //     enter: pageDirection ? classes.pageEnterRightEnter : classes.pageEnterLeftEnter,
                    //     enterActive: pageDirection ? classes.pageEnterRightEnterActive : classes.pageEnterLeftEnterActive,
                    //     exit: pageDirection ? classes.pageEnterRightExit : classes.pageEnterLeftExit,
                    //     exitActive: pageDirection ? classes.pageEnterRightExitActive : classes.pageEnterLeftExitActive,
                    // }}
                    // key={currentKey}
                    // timeout={timeout}
                    // classNames={{
                    //     enter: isForward ? classes.pageEnterRightEnter : classes.pageEnterLeftEnter,
                    //     enterActive: isForward ? classes.pageEnterRightEnterActive : classes.pageEnterLeftEnterActive,
                    //     exit: isForward ? classes.pageEnterRightExit : classes.pageEnterLeftExit,
                    //     exitActive: isForward ? classes.pageEnterRightExitActive : classes.pageEnterLeftExitActive,
                    // }}
                    mountOnEnter={false}
                    unmountOnExit={true}
                    onEnter={() => console.log('enter')}
                    onExit={() => console.log('exit')}
                >
                    <Routes location={location}>
                        <Route path="" element={<HomePage />}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/product" element={<Products/>}/>
                        <Route path="/accessories" element={<Accessories/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/cabinet" element={<Cabinet/>}/>
                        <Route path="/prdcts/monoblocks" element={<Monoblocks
                            basket={basket}
                            monoblocks={monoblocks}
                            addToBasket={addToBasket}
                        />}/>
                        <Route path="/prdcts/macpro" element={<MacPro
                            basket={basket}
                            macPro={macPro}
                            addToBasket={addToBasket}
                        />}/>
                        <Route path="/prdcts/macstudios" element={<MacStudios
                            basket={basket}
                            mStudio={mStudio}
                            addToBasket={addToBasket}
                        />}/>
                        <Route path="/prdcts/macmini" element={<MacMini
                            basket={basket}
                            mMini={mMini}
                            addToBasket={addToBasket}
                        />}/>
                        <Route path="/prdcts/displays" element={<Displays
                            basket={basket}
                            displays={displays}
                            addToBasket={addToBasket}
                        />}/>
                        <Route path="/prdcts/macbooks" element={<Macbooks
                            basket={basket}
                            macbooks={macbooks}
                            addToBasket={addToBasket}
                        />}/>
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>


        </div>


    )

}

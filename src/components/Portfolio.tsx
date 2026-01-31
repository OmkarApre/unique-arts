import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  ArrowLeft,
  ZoomIn,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import fiberImage from "../assets/generated_images/fiber_frp_sculpture_installation.png";
import grcImage from "../assets/generated_images/grc_architectural_facade_work.png";
import sculptureImage from "../assets/generated_images/elegant_artistic_sculpture_masterpiece.png";
import fountainImage from "../assets/generated_images/decorative_water_fountain.png";
import cncImage from "../assets/generated_images/cnc_laser_cut_artwork.png";
import cnc3dDoor from "../assets/generated_images/custom_3d_cnc_carved_door.png";
import cnc3dWallPanel from "../assets/generated_images/3d_cnc_wall_panel_design.png";
import cnc3dArch from "../assets/generated_images/custom_3d_cnc_carved_arch.png";
import cnc3dRadhaKrishna from "../assets/generated_images/3d_carved_radha_krishna_panel.png";
import archElephants from "../assets/WhatsApp_Image_2025-12-17_at_2.24.32_PM_1765975811026.jpeg";

import radhaKrishnaTeal from "../assets/WhatsApp_Image_2025-12-17_at_2.24.44_PM_(1)_1765975179666.jpeg";
import radhaKrishnaPink from "../assets/WhatsApp_Image_2025-12-17_at_2.24.38_PM_(1)_1765975179666.jpeg";
import radhaKrishnaModern from "../assets/WhatsApp_Image_2025-12-17_at_2.24.31_PM_(1)_1765975179667.jpeg";
import radhaKrishnaSwing from "../assets/WhatsApp_Image_2025-12-17_at_2.24.27_PM_(1)_1765975179667.jpeg";

import wallPanelSwirl from "../assets/WhatsApp_Image_2025-12-17_at_2.24.32_PM_(1)_1765975274082.jpeg";
import wallPanelGeometric from "../assets/WhatsApp_Image_2025-12-17_at_2.24.38_PM_1765975274082.jpeg";
import wallPanelLeafArch from "../assets/WhatsApp_Image_2025-12-17_at_2.24.37_PM_1765975274083.jpeg";
import wallPanelFeathers from "../assets/WhatsApp_Image_2025-12-17_at_2.24.39_PM_1765975274083.jpeg";
import wallPanelFloral from "../assets/WhatsApp_Image_2025-12-17_at_2.24.35_PM_1765975274083.jpeg";
import wallPanelCallaLily from "../assets/WhatsApp_Image_2025-12-17_at_2.24.33_PM_(2)_1765975274084.jpeg";
import wallPanelPeacocks from "../assets/WhatsApp_Image_2025-12-17_at_2.24.35_PM_(1)_1765975274084.jpeg";
import wallPanelLotus from "../assets/WhatsApp_Image_2025-12-17_at_2.24.41_PM_1765975274084.jpeg";
import wallPanelFlower from "../assets/WhatsApp_Image_2025-12-17_at_2.24.46_PM_1765975274084.jpeg";
import wallPanelLotusLarge from "../assets/WhatsApp_Image_2025-12-17_at_2.24.31_PM_(2)_1765975274085.jpeg";
import wallPanelCallaHalf from "../assets/WhatsApp_Image_2025-12-17_at_2.24.30_PM_1765975274085.jpeg";
import wallPanelMandala from "../assets/WhatsApp_Image_2025-12-17_at_2.24.24_PM_1765975274085.jpeg";
import wallPanelFeatherPattern from "../assets/WhatsApp_Image_2025-12-17_at_2.24.33_PM_(1)_1765975274086.jpeg";
import wallPanelWaveModern from "../assets/WhatsApp_Image_2025-12-17_at_2.24.47_PM_(2)_1765975274087.jpeg";

import wallPanelTropical from "../assets/WhatsApp_Image_2025-12-17_at_1.20.21_PM_1765976328280.jpeg";
import wallPanelFaces from "../assets/WhatsApp_Image_2025-12-17_at_1.20.08_PM_1765976328281.jpeg";
import wallPanelOrganic from "../assets/WhatsApp_Image_2025-12-17_at_1.20.24_PM_1765976328281.jpeg";
import wallPanelFans from "../assets/WhatsApp_Image_2025-12-17_at_1.20.14_PM_-_Copy_1765976328281.jpeg";
import wallPanelPalm from "../assets/WhatsApp_Image_2025-12-17_at_1.20.15_PM_1765976328282.jpeg";
import wallPanelMandalaLarge from "../assets/WhatsApp_Image_2025-12-17_at_1.20.19_PM_1765976328282.jpeg";
import wallPanelSpiralFloral from "../assets/WhatsApp_Image_2025-12-17_at_1.20.22_PM_1765976328283.jpeg";
import wallPanelSunburst from "../assets/WhatsApp_Image_2025-07-02_at_1.12.16_PM_1765976739524.jpeg";
import wallPanelLotusRing from "../assets/WhatsApp_Image_2025-12-17_at_1.20.17_PM_1765976759992.jpeg";

import mandirShivling from "../assets/WhatsApp_Image_2025-12-17_at_1.20.15_PM_(1)_1765976363642.jpeg";
import mandirOm from "../assets/WhatsApp_Image_2025-12-17_at_2.24.47_PM_(1)_1765976363643.jpeg";
import mandirSwastik from "../assets/WhatsApp_Image_2025-12-17_at_2.24.47_PM_1765976363643.jpeg";

import fountainPool from "../assets/WhatsApp_Image_2025-12-17_at_6.40.29_PM_1765977141481.jpeg";
import fountainRockCascade from "../assets/WhatsApp_Image_2025-12-17_at_6.40.30_PM_(1)_1765977141482.jpeg";
import fountainBuddhaWall from "../assets/WhatsApp_Image_2025-12-17_at_6.40.30_PM_(2)_1765977141483.jpeg";
import fountainLeafWall from "../assets/WhatsApp_Image_2025-12-17_at_6.40.30_PM_1765977141483.jpeg";
import fountainFloral from "../assets/WhatsApp_Image_2025-12-17_at_6.40.33_PM_1765977141484.jpeg";
import fountainCrane from "../assets/WhatsApp_Image_2025-12-17_at_6.40.35_PM_1765977141484.jpeg";
import fountainMosaic from "../assets/WhatsApp_Image_2025-12-17_at_6.40.38_PM_(1)_1765977141485.jpeg";
import fountainBuddhaLeaf from "../assets/WhatsApp_Image_2025-12-17_at_6.40.38_PM_1765977141485.jpeg";

import fiberKrishna from "../assets/WhatsApp_Image_2025-12-17_at_1.08.25_PM_1765957280609.jpeg";
import fiberCranes from "../assets/WhatsApp_Image_2025-12-17_at_1.08.18_PM_1765957280609.jpeg";
import fiberRadhaKrishna from "../assets/WhatsApp_Image_2025-12-17_at_1.08.14_PM_1765957280610.jpeg";
import fiberTempleRelief from "../assets/WhatsApp_Image_2025-12-17_at_1.08.23_PM_1765957280610.jpeg";
import fiberCityscape from "../assets/WhatsApp_Image_2025-12-17_at_1.08.24_PM_(1)_1765957280611.jpeg";
import fiberCouple from "../assets/WhatsApp_Image_2025-12-17_at_1.08.24_PM_1765957280611.jpeg";

import namePlate1 from "../assets/name_plates/page-001.png";
import namePlate2 from "../assets/name_plates/page-002.png";
import namePlate3 from "../assets/name_plates/page-003.png";
import namePlate4 from "../assets/name_plates/page-004.png";
import namePlate5 from "../assets/name_plates/page-005.png";
import namePlate6 from "../assets/name_plates/page-006.png";
import namePlate7 from "../assets/name_plates/page-007.png";
import namePlate8 from "../assets/name_plates/page-008.png";

import npKrishnaMantra from "../assets/Name_plates_2_compressed_compressed_page-0082_1765972916179.jpg";
import npLedShivangan from "../assets/Name_plates_2_compressed_compressed_page-0085_1765972916179.jpg";
import npShahCircle from "../assets/Name_plates_2_compressed_compressed_page-0086_1765972916179.jpg";
import npSwamiSamarth from "../assets/Name_plates_2_compressed_compressed_page-0087_1765972916179.jpg";
import npSwamiHouse from "../assets/Name_plates_2_compressed_compressed_page-0088_1765972916180.jpg";
import npSwamiDesign from "../assets/Name_plates_2_compressed_compressed_page-0089_1765972916180.jpg";
import npThamarai from "../assets/Name_plates_2_compressed_compressed_page-0037_1765972916180.jpg";
import npGanesha from "../assets/Name_plates_2_compressed_compressed_page-0038_1765972916180.jpg";
import npRizvinCircle from "../assets/Name_plates_2_compressed_compressed_page-0039_1765972916181.jpg";
import npNopurHouse from "../assets/Name_plates_2_compressed_compressed_page-0040_1765972916181.jpg";
import npKoppikar from "../assets/Name_plates_2_compressed_compressed_page-0041_1765972916181.jpg";
import npPatelPink from "../assets/Name_plates_2_compressed_compressed_page-0042_1765972916181.jpg";
import npSriNilayam from "../assets/Name_plates_2_compressed_compressed_page-0043_1765972916182.jpg";
import npSreeVilla from "../assets/Name_plates_2_compressed_compressed_page-0044_1765972916182.jpg";
import npJangid from "../assets/Name_plates_2_compressed_compressed_page-0045_1765972916182.jpg";
import npLedBidave from "../assets/Name_plates_2_compressed_compressed_page-0046_1765972916182.jpg";
import npAmanPal from "../assets/Name_plates_2_compressed_compressed_page-0047_1765972916183.jpg";
import npLedRichard from "../assets/Name_plates_2_compressed_compressed_page-0048_1765972916183.jpg";
import npLakshmiNiwas from "../assets/Name_plates_2_compressed_compressed_page-0049_1765972916183.jpg";

import fiberRamDarbar from "../assets/WhatsApp_Image_2026-01-03_at_2.03.23_PM_1767430736932.jpeg";
import fiberRadhaKrishnaTree from "../assets/WhatsApp_Image_2026-01-03_at_2.03.30_PM_(2)_1767430736933.jpeg";
import fiberShivajiProfile from "../assets/WhatsApp_Image_2026-01-03_at_2.03.29_PM_(1)_1767430736934.jpeg";
import fiberGanesha from "../assets/WhatsApp_Image_2026-01-03_at_2.03.27_PM_(1)_1767430736934.jpeg";
import fiberShivajiCourt from "../assets/WhatsApp_Image_2026-01-03_at_2.03.26_PM_(1)_1767430736934.jpeg";
import fiberRadhaKrishnaGold from "../assets/WhatsApp_Image_2026-01-03_at_2.03.28_PM_(1)_1767430736935.jpeg";
import fiberRadhaKrishnaColor from "../assets/WhatsApp_Image_2026-01-03_at_2.03.30_PM_(1)_1767430736935.jpeg";
import fiberRadhaKrishnaLed from "../assets/WhatsApp_Image_2026-01-03_at_2.03.24_PM_1767430736936.jpeg";
import fiberShivajiStairs from "../assets/WhatsApp_Image_2026-01-03_at_2.03.20_PM_(2)_1767430736936.jpeg";
import fiberShivajiFort from "../assets/WhatsApp_Image_2026-01-03_at_2.03.20_PM_(3)_1767430736936.jpeg";

import door3dJali from "../assets/WhatsApp_Image_2025-12-17_at_2.24.44_PM_1767439346476.jpeg";
import door3dMandalaPattern from "../assets/WhatsApp_Image_2025-12-17_at_2.24.44_PM_(2)_1767439346477.jpeg";
import door3dPinkMandala from "../assets/WhatsApp_Image_2025-12-17_at_2.24.42_PM_1767439346477.jpeg";
import door3dLionClassic from "../assets/WhatsApp_Image_2025-12-17_at_2.24.40_PM_1767439346477.jpeg";
import door3dSunburstGreen from "../assets/WhatsApp_Image_2025-12-17_at_2.24.40_PM_(1)_1767439346478.jpeg";
import door3dSunrayDark from "../assets/WhatsApp_Image_2025-12-17_at_2.24.39_PM_(1)_1767439346478.jpeg";
import door3dTribalMandala from "../assets/WhatsApp_Image_2025-12-17_at_2.24.31_PM_1767439346478.jpeg";
import door3dLaceMandala from "../assets/WhatsApp_Image_2025-12-17_at_2.24.30_PM_(1)_1767439346478.jpeg";

import wallPanelAbstractSwirl from "../assets/WhatsApp_Image_2026-01-03_at_2.35.17_PM_1767440085178.jpeg";

import door3dSunburstGreenLarge from "../assets/exclusive_3D_panels_page-0002_1767440179365.jpg";
import door3dClassicFloral from "../assets/exclusive_3D_panels_page-0004_1767440179366.jpg";
import door3dSunburstTeal from "../assets/exclusive_3D_panels_page-0104_1767440179366.jpg";
import door3dSunburstNatural from "../assets/exclusive_3D_panels_page-0093_1767440179367.jpg";
import door3dSunburstPink from "../assets/exclusive_3D_panels_page-0082_1767440179367.jpg";
import door3dTribalGreen from "../assets/exclusive_3D_panels_page-0081_1767440179367.jpg";
import door3dSunrayMint from "../assets/exclusive_3D_panels_page-0075_1767440179368.jpg";

import royalJali01 from "../assets/Royal_2d(2)_page-0001_1767440910653.jpg";
import royalJali02 from "../assets/Royal_2d(2)_page-0002_1767440910653.jpg";
import royalJali03 from "../assets/Royal_2d(2)_page-0003_1767440910654.jpg";
import royalJali04 from "../assets/Royal_2d(2)_page-0004_1767440910654.jpg";
import royalJali05 from "../assets/Royal_2d(2)_page-0005_1767440910654.jpg";
import royalJali06 from "../assets/Royal_2d(2)_page-0006_1767440910654.jpg";
import royalJali07 from "../assets/Royal_2d(2)_page-0007_1767440910655.jpg";
import royalJali08 from "../assets/Royal_2d(2)_page-0008_1767440910655.jpg";
import royalJali09 from "../assets/Royal_2d(2)_page-0009_1767440910655.jpg";
import royalJali10 from "../assets/Royal_2d(2)_page-0010_1767440910655.jpg";
import royalJali11 from "../assets/Royal_2d(2)_page-0011_1767440910656.jpg";
import royalJali12 from "../assets/Royal_2d(2)_page-0012_1767440910656.jpg";
import royalJali13 from "../assets/Royal_2d(2)_page-0013_1767440910656.jpg";
import royalJali14 from "../assets/Royal_2d(2)_page-0014_1767440910656.jpg";
import royalJali15 from "../assets/Royal_2d(2)_page-0015_1767440910657.jpg";
import royalJali16 from "../assets/Royal_2d(2)_page-0016_1767440910657.jpg";
import royalJali19 from "../assets/Royal_2d(2)_page-0019_1767440910652.jpg";
import royalJali20 from "../assets/Royal_2d(2)_page-0020_1767440910652.jpg";
import royalJali21 from "../assets/Royal_2d(2)_page-0021_1767440910653.jpg";
import royalJali22 from "../assets/Royal_2d(2)_page-0022_1767440910653.jpg";

import safetyDoorSunPattern from "../assets/Safety-Sun-Patten-Door-Jali-Design_1767446070306.jpg";
import safetyDoorOvalFloral from "../assets/WhatsApp_Image_2026-01-03_at_5.59.09_PM_(1)_1767446070306.jpeg";
import safetyDoorArtDeco from "../assets/WhatsApp_Image_2026-01-03_at_5.59.08_PM_1767446070307.jpeg";
import safetyDoorLeafCorner from "../assets/WhatsApp_Image_2026-01-03_at_5.10.28_PM_1767446070307.jpeg";
import safetyDoorGeometric from "../assets/images_1767446070307.jpg";
import safetyDoorGoldFloral from "../assets/latest-metal-jali-door-design-for-home_1767446070307.jpg";
import safetyDoorHexagonal from "../assets/a4a98f78421f9f447757945596a3bb10_1767446070307.jpg";
import safetyDoorFlowerCircle from "../assets/190ad8dabf13da1d6e2f192848b2f52d_1767446070308.jpg";
import safetyDoorWavePattern from "../assets/e36a42b2f92761106e322e0780466d73_1767446070308.jpg";
import safetyDoorSunPatternAlt from "../assets/Safety-Sun-Patten-Door-Jali-Design_1767446070308.webp";

import godDesign01 from "../assets/WhatsApp_Image_2026-01-03_at_7.13.27_PM_1767450619649.jpeg";
import godDesign02 from "../assets/WhatsApp_Image_2026-01-03_at_7.14.23_PM_1767450619650.jpeg";
import godDesign03 from "../assets/WhatsApp_Image_2026-01-03_at_7.14.56_PM_1767450619651.jpeg";
import godDesign04 from "../assets/WhatsApp_Image_2026-01-03_at_7.16.04_PM_1767450619651.jpeg";
import godDesign05 from "../assets/WhatsApp_Image_2026-01-03_at_7.16.49_PM_1767450619652.jpeg";
import godDesign06 from "../assets/WhatsApp_Image_2026-01-03_at_7.19.01_PM_1767450619652.jpeg";
import godDesign07 from "../assets/WhatsApp_Image_2026-01-03_at_7.19.49_PM_1767450619653.jpeg";
import godDesign08 from "../assets/WhatsApp_Image_2026-01-03_at_7.20.30_PM_1767450619653.jpeg";
import godDesign09 from "../assets/WhatsApp_Image_2026-01-03_at_7.21.24_PM_1767450619653.jpeg";
import godDesign10 from "../assets/WhatsApp_Image_2026-01-03_at_7.22.02_PM_1767450619653.jpeg";
import godDesign11 from "../assets/WhatsApp_Image_2026-01-03_at_7.23.03_PM_1767450619654.jpeg";
import godDesign12 from "../assets/WhatsApp_Image_2026-01-03_at_7.27.00_PM_1767450619654.jpeg";
import godDesign13 from "../assets/WhatsApp_Image_2026-01-03_at_7.27.31_PM_1767450619654.jpeg";
import godDesign14 from "../assets/WhatsApp_Image_2026-01-03_at_7.28.14_PM_1767450619654.jpeg";
import godDesign15 from "../assets/WhatsApp_Image_2026-01-03_at_7.29.22_PM_1767450619655.jpeg";
import godDesign16 from "../assets/WhatsApp_Image_2026-01-03_at_7.30.21_PM_1767450619655.jpeg";
import godDesign17 from "../assets/WhatsApp_Image_2026-01-03_at_7.30.59_PM_1767450619655.jpeg";
import godDesign18 from "../assets/WhatsApp_Image_2026-01-03_at_7.31.46_PM_1767450619656.jpeg";
import godDesign19 from "../assets/WhatsApp_Image_2026-01-03_at_7.32.44_PM_1767450619656.jpeg";
import godDesign20 from "../assets/WhatsApp_Image_2026-01-03_at_7.33.25_PM_1767450619656.jpeg";

import grcLionStatue from "../assets/WhatsApp_Image_2026-01-03_at_2.28.27_PM_(1)_1767434136020.jpeg";
import grcBuildingFacade from "../assets/WhatsApp_Image_2026-01-03_at_2.28.27_PM_1767434136021.jpeg";
import grcShilpaStorefront from "../assets/WhatsApp_Image_2026-01-03_at_2.28.28_PM_(1)_1767434136021.jpeg";
import grcGrandColumns from "../assets/WhatsApp_Image_2026-01-03_at_2.28.28_PM_(2)_1767434136022.jpeg";
import grcCornerMolding from "../assets/WhatsApp_Image_2026-01-03_at_2.28.28_PM_1767434136022.jpeg";
import grcColumnPorchView from "../assets/WhatsApp_Image_2026-01-03_at_2.28.29_PM_(1)_1767434136022.jpeg";
import grcVillaPalace from "../assets/WhatsApp_Image_2026-01-03_at_2.28.30_PM_(2)_1767434136022.jpeg";
import grcColumnDetail from "../assets/WhatsApp_Image_2026-01-03_at_2.28.30_PM_1767434136023.jpeg";

import sculptureBalancingRocks from "../assets/WhatsApp_Image_2026-01-03_at_2.03.22_PM_1767430615154.jpeg";
import sculptureFist from "../assets/WhatsApp_Image_2026-01-03_at_2.03.21_PM_(2)_1767430615154.jpeg";
import sculptureFigure from "../assets/WhatsApp_Image_2026-01-03_at_2.03.27_PM_(2)_1767430615155.jpeg";
import sculptureThinker from "../assets/WhatsApp_Image_2026-01-03_at_2.03.21_PM_1767430615155.jpeg";
import sculpturePolyWoman from "../assets/WhatsApp_Image_2026-01-03_at_2.03.20_PM_(1)_1767430615156.jpeg";
import sculpturePolyMan from "../assets/WhatsApp_Image_2026-01-03_at_2.03.20_PM_1767430615156.jpeg";
import om_backled_design from "../assets/om_back.jpeg"

import godDesign21 from "../assets/GodDesign_Hanuman_Sitting.jpg";
import godDesign22 from "../assets/GodDesign_Hanuman_Red.jpg";
import godDesign23 from "../assets/GodDesign_Krishna_Cow.jpg";
import godDesign24 from "../assets/GodDesign_Murugan.jpg";
import godDesign25 from "../assets/GodDesign_Krishna_Feather.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Majestic Fiber Sculpture",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberImage,
    description:
      "Large-scale FRP installation for corporate headquarters, showcasing vibrant colors and intricate detailing.",
  },
  {
    id: 15,
    title: "Radha Krishna with Peacock Feathers",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberKrishna,
    description:
      "Stunning black fiber artwork featuring Lord Krishna with intricate peacock feather design on rustic wood panel.",
  },
  {
    id: 16,
    title: "Flying Cranes Circular Art",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberCranes,
    description:
      "Elegant white fiber relief sculpture of flying cranes with red sun motif on textured circular panel.",
  },
  {
    id: 17,
    title: "Radha Krishna with Sacred Cow",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRadhaKrishna,
    description:
      "Beautiful white fiber mural of Radha Krishna with Nandi, adorned with delicate floral elements.",
  },
  {
    id: 18,
    title: "Temple Cityscape Relief",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberTempleRelief,
    description:
      "Intricate fiber relief depicting traditional temple architecture and sacred pilgrimage landscape.",
  },
  {
    id: 19,
    title: "White Temple Panorama",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberCityscape,
    description:
      "Exquisite circular white fiber sculpture showcasing detailed temple and cityscape architecture.",
  },
  {
    id: 20,
    title: "Divine Couple Wall Art",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberCouple,
    description:
      "Graceful white fiber wall panel featuring Radha Krishna in traditional attire with floral border.",
  },
  {
    id: 100,
    title: "Ram Darbar Relief",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRamDarbar,
    description:
      "Magnificent fiber relief depicting Lord Ram and Sita with Lakshman, Bharat, Shatrughan and Hanuman in royal court setting.",
  },
  {
    id: 101,
    title: "Radha Krishna Under Tree",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRadhaKrishnaTree,
    description:
      "Elegant white fiber mural of Radha Krishna in loving embrace beneath a tree with lotus flowers.",
  },
  {
    id: 102,
    title: "Chhatrapati Shivaji Portrait",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberShivajiProfile,
    description:
      "Majestic profile relief of Chhatrapati Shivaji Maharaj with intricate detailing and Raigad fort in background.",
  },
  {
    id: 103,
    title: "Lord Ganesha Wall Mural",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberGanesha,
    description:
      "Grand fiber relief of Lord Ganesha seated on lotus, perfect for entrance halls and pooja rooms.",
  },
  {
    id: 104,
    title: "Shivaji Royal Court",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberShivajiCourt,
    description:
      "Spectacular large-scale fiber mural depicting Chhatrapati Shivaji Maharaj's royal court with courtiers and subjects.",
  },
  {
    id: 105,
    title: "Radha Krishna with Flute",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRadhaKrishnaGold,
    description:
      "Beautiful fiber relief of Lord Krishna playing flute with Radha, adorned with gold accents and nature backdrop.",
  },
  {
    id: 106,
    title: "Radha Krishna Colorful Mural",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRadhaKrishnaColor,
    description:
      "Vibrant hand-painted fiber artwork of Radha Krishna with traditional blue skin and colorful attire.",
  },
  {
    id: 107,
    title: "Radha Krishna LED Panel",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberRadhaKrishnaLed,
    description:
      "Stunning fiber wall panel of Radha Krishna with floral accents and ambient LED backlighting.",
  },
  {
    id: 108,
    title: "Shivaji Ascending Fort",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberShivajiStairs,
    description:
      "Dynamic fiber relief of Chhatrapati Shivaji Maharaj ascending fort stairs with sword in hand.",
  },
  {
    id: 109,
    title: "Shivaji at Raigad",
    category: "fiber",
    categoryLabel: "Fiber (FRP)",
    image: fiberShivajiFort,
    description:
      "Impressive fiber mural of Shivaji Maharaj at Raigad fort with workers and fortification in background.",
  },
  {
    id: 2,
    title: "Modern GRC Facade",
    category: "grc",
    categoryLabel: "GRC",
    image: grcImage,
    description:
      "Elegant glass reinforced concrete facade panels for contemporary architecture.",
  },
  {
    id: 200,
    title: "Guardian Lion Statue",
    category: "grc",
    categoryLabel: "GRC",
    image: grcLionStatue,
    description:
      "Majestic GRC lion statue on pedestal, perfect for grand entrances and gate pillars.",
  },
  {
    id: 201,
    title: "Heritage Building Facade",
    category: "grc",
    categoryLabel: "GRC",
    image: grcBuildingFacade,
    description:
      "Large-scale GRC facade work featuring classical balustrades, arched windows and intricate cornice details.",
  },
  {
    id: 202,
    title: "Commercial Storefront",
    category: "grc",
    categoryLabel: "GRC",
    image: grcShilpaStorefront,
    description:
      "Elegant GRC storefront design with classical columns, moldings and decorative balustrade details.",
  },
  {
    id: 203,
    title: "Grand Columned Entrance",
    category: "grc",
    categoryLabel: "GRC",
    image: grcGrandColumns,
    description:
      "Impressive GRC entrance with tall fluted columns, Corinthian capitals and ornate molding work.",
  },
  {
    id: 204,
    title: "Corner Detail Molding",
    category: "grc",
    categoryLabel: "GRC",
    image: grcCornerMolding,
    description:
      "Detailed GRC corner work showcasing layered cornices, dentil molding and classical architectural elements.",
  },
  {
    id: 205,
    title: "Classical Porch Design",
    category: "grc",
    categoryLabel: "GRC",
    image: grcColumnPorchView,
    description:
      "Elegant GRC porch with fluted columns, decorative capitals and ornamental frieze work.",
  },
  {
    id: 206,
    title: "Luxury Villa Facade",
    category: "grc",
    categoryLabel: "GRC",
    image: grcVillaPalace,
    description:
      "Premium GRC villa exterior with Corinthian columns, arched windows, round medallions and rooftop balustrade.",
  },
  {
    id: 207,
    title: "Column & Balcony Detail",
    category: "grc",
    categoryLabel: "GRC",
    image: grcColumnDetail,
    description:
      "Refined GRC work featuring square pillars, decorative scrollwork and classical balustrade railings.",
  },
  {
    id: 3,
    title: "Classical Bronze Sculpture",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculptureImage,
    description:
      "Handcrafted bronze sculpture with classical aesthetics for luxury garden settings.",
  },
  {
    id: 90,
    title: "Balancing Rocks Installation",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculptureBalancingRocks,
    description:
      "Gravity-defying outdoor sculpture featuring balanced rocks connected by rope, creating an illusion of impossible balance.",
  },
  {
    id: 91,
    title: "Fist Holding Rope",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculptureFist,
    description:
      "Hyper-realistic clay sculpture of a powerful fist gripping a rope, showcasing exceptional anatomical detail.",
  },
  {
    id: 92,
    title: "Contemplative Figure",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculptureFigure,
    description:
      "Ethereal silver-toned sculpture of a contemplative figure with intricate surface texture and emotional depth.",
  },
  {
    id: 93,
    title: "The Thinker Modern",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculptureThinker,
    description:
      "Contemporary interpretation of the classic thinker pose, crafted in warm wood-toned finish with flowing lines.",
  },
  {
    id: 94,
    title: "Polygonal Woman Breaking Through",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculpturePolyWoman,
    description:
      "Dynamic turquoise geometric sculpture of a woman breaking through a wall, creating dramatic impact.",
  },
  {
    id: 95,
    title: "Polygonal Man Pushing Through",
    category: "sculpture",
    categoryLabel: "Sculpture",
    image: sculpturePolyMan,
    description:
      "Bold low-poly turquoise sculpture of a man pushing through a barrier, symbolizing breakthrough and determination.",
  },
  {
    id: 4,
    title: "Tiered Water Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainImage,
    description:
      "Stunning decorative fountain installation for a luxury hotel courtyard.",
  },
  {
    id: 74,
    title: "Pool Fountain with Urn",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainPool,
    description:
      "Elegant pool fountain with decorative urn and floral motif backdrop.",
  },
  {
    id: 75,
    title: "Rock Cascade Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainRockCascade,
    description:
      "Natural rock-style cascading fountain with multi-tier water flow.",
  },
  {
    id: 76,
    title: "Buddha Wall Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainBuddhaWall,
    description:
      "Zen-inspired wall fountain with Buddha statues and LED-lit water streams.",
  },
  {
    id: 77,
    title: "Leaf Design Water Wall",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainLeafWall,
    description: "Modern water wall with colorful leaf accent design.",
  },
  {
    id: 78,
    title: "Floral Cascade Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainFloral,
    description:
      "Indoor cascade fountain with floral arrangements and ambient lighting.",
  },
  {
    id: 79,
    title: "Crane Rock Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainCrane,
    description:
      "Naturalistic rock fountain featuring elegant crane sculptures.",
  },
  {
    id: 80,
    title: "Mosaic LED Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainMosaic,
    description:
      "Contemporary mosaic fountain with dual water features and LED lighting.",
  },
  {
    id: 81,
    title: "Buddha Nature Fountain",
    category: "fountains",
    categoryLabel: "Fountains",
    image: fountainBuddhaLeaf,
    description:
      "Artistic Buddha and leaf mural fountain with rustic wood-texture surround.",
  },
  {
    id: 5,
    title: "Precision Laser Art Panel",
    category: "cnc-general",
    categoryLabel: "CNC & Laser Cutting",
    image: cncImage,
    description:
      "Intricate geometric patterns created with precision CNC laser cutting technology.",
  },
  {
    id: 400,
    title: "Religious Jali Designs - RD 301-310",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali01,
    description:
      "Premium religious-themed laser cut jali panels featuring Shubh Labh, Ganesha, Om symbols, peacock motifs, and Buddha designs.",
  },
  {
    id: 401,
    title: "Geometric Jali Patterns - RD 311-320",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali02,
    description:
      "Modern geometric laser cut designs including maze patterns, spiral circles, hexagonal stars, and wave patterns.",
  },
  {
    id: 402,
    title: "Geometric Jali Patterns - RD 321-330",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali03,
    description:
      "Contemporary geometric patterns with interlocking squares, circles, triangles, and 3D cube illusion designs.",
  },
  {
    id: 403,
    title: "Geometric Jali Patterns - RD 331-340",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali04,
    description:
      "Modern maze and lattice patterns featuring hexagonal grids, diagonal weaves, and diamond chain designs.",
  },
  {
    id: 404,
    title: "Floral Jali Designs - RD 341-350",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali05,
    description:
      "Elegant floral laser cut panels with leaf patterns, peacock feathers, vine scrolls, and bird motifs.",
  },
  {
    id: 405,
    title: "Floral Jali Designs - RD 351-360",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali06,
    description:
      "Artistic floral patterns including spiral circles, butterflies, mandala flowers, and traditional warli art.",
  },
  {
    id: 406,
    title: "Floral Jali Designs - RD 361-370",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali07,
    description:
      "Ornate floral scrollwork, tree patterns, maple leaves, geometric flowers, and tropical palm designs.",
  },
  {
    id: 407,
    title: "Floral Jali Designs - RD 371-380",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali08,
    description:
      "Nature-inspired designs with flowing vines, wildflowers, fern fronds, and dotted spiral patterns.",
  },
  {
    id: 408,
    title: "Floral Jali Designs - RD 381-390",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali09,
    description:
      "Classic ornamental patterns with traditional motifs, lotus scrolls, and elegant vine borders.",
  },
  {
    id: 409,
    title: "Floral Jali Designs - RD 391-400",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali10,
    description:
      "Tropical and nature designs featuring palm trees, daisy fields, molecular patterns, and sunburst motifs.",
  },
  {
    id: 410,
    title: "Floral Jali Designs - RD 401-410",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali11,
    description:
      "Delicate floral patterns with fern leaves, spiral curves, radial flowers, and honeycomb leaf designs.",
  },
  {
    id: 411,
    title: "Floral Jali Designs - RD 411-420",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali12,
    description:
      "Symmetrical floral designs with damask patterns, wave tiles, acanthus leaves, and shell fan motifs.",
  },
  {
    id: 412,
    title: "Abstract Jali Designs - RD 421-430",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali13,
    description:
      "Modern abstract patterns with cityscape blocks, spiral waves, zebra stripes, and Moroccan tiles.",
  },
  {
    id: 413,
    title: "Abstract Jali Designs - RD 431-440",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali14,
    description:
      "Contemporary abstract designs with spiral curls, wave lines, interlocking Celtic knots, and organic shapes.",
  },
  {
    id: 414,
    title: "Abstract Jali Designs - RD 441-450",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali15,
    description:
      "Modern patterns featuring 3D spheres, hexagonal stars, diagonal bricks, and flowing leaf vines.",
  },
  {
    id: 415,
    title: "Abstract Jali Designs - RD 451-460",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali16,
    description:
      "Artistic abstract panels with Celtic knots, damask flowers, star geometry, and traditional Shubh Labh.",
  },
  {
    id: 416,
    title: "Abstract Jali Designs - RD 481-490",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali19,
    description:
      "Classic abstract patterns with Greek key, Chinese maze, woven lattice, and circular chain designs.",
  },
  {
    id: 417,
    title: "Abstract Jali Designs - RD 491-500",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali20,
    description:
      "Organic abstract designs with tropical leaves, spiral swirls, vine branches, and Moroccan geometry.",
  },
  {
    id: 418,
    title: "Abstract Jali Designs - RD 501-510",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali21,
    description:
      "Diverse abstract patterns including cross lattice, star triangles, floral scrolls, and herringbone weave.",
  },
  {
    id: 419,
    title: "Abstract Jali Designs - RD 511-520",
    category: "royaljali",
    categoryLabel: "Royal Jali Design",
    image: royalJali22,
    description:
      "Mixed abstract designs with paisley vines, wave lines, eye spirals, bamboo leaves, and zigzag arrows.",
  },
  {
    id: 6,
    title: "Custom 3D Carved Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: cnc3dDoor,
    description:
      "Luxurious 3D CNC carved wooden door with intricate geometric patterns. Fully customizable to your specifications.",
  },
  {
    id: 300,
    title: "Jali Pattern Double Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dJali,
    description:
      "Elegant double door with traditional jali cutwork pattern and ornate floral border carving. Fully customizable.",
  },
  {
    id: 301,
    title: "Mandala Circle Door Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dMandalaPattern,
    description:
      "Stunning 3D carved door panel featuring intricate mandala pattern with layered geometric details. Fully customizable.",
  },
  {
    id: 302,
    title: "Rose Mandala Glass Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dPinkMandala,
    description:
      "Beautiful rose-toned door with half mandala carving and glass panel insert. Fully customizable.",
  },
  {
    id: 303,
    title: "Lion Medallion Classic Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dLionClassic,
    description:
      "Classic green door with lion head medallion, fluted columns and glass panel. Fully customizable.",
  },
  {
    id: 304,
    title: "Sunburst Art Deco Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunburstGreen,
    description:
      "Modern art deco style door panel with radiating sunburst pattern and geometric accents. Fully customizable.",
  },
  {
    id: 305,
    title: "Sunray Corner Design",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunrayDark,
    description:
      "Elegant deep green door panel with corner sunray and geometric star pattern. Fully customizable.",
  },
  {
    id: 306,
    title: "Tribal Mandala Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dTribalMandala,
    description:
      "Intricate tribal-inspired mandala carving with zigzag and wave patterns. Fully customizable.",
  },
  {
    id: 307,
    title: "Lace Mandala Mirror Frame",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dLaceMandala,
    description:
      "Delicate lace-like mandala pattern with scalloped edges, perfect for mirrors or panels. Fully customizable.",
  },
  {
    id: 308,
    title: "Sunburst Radial Green Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunburstGreenLarge,
    description:
      "Stunning sage green door with concentric sunburst rays and geometric star center. Fully customizable.",
  },
  {
    id: 309,
    title: "Classic Victorian Floral Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dClassicFloral,
    description:
      "Elegant sage green door with ornate Victorian scrollwork, floral medallions, and circular base motif. Fully customizable.",
  },
  {
    id: 310,
    title: "Sunburst Teal Door Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunburstTeal,
    description:
      "Contemporary teal door with dramatic half-sunburst design and geometric center accent. Fully customizable.",
  },
  {
    id: 311,
    title: "Natural Wood Sunburst Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunburstNatural,
    description:
      "Beautiful natural wood finish door with concentric sunburst rays and star center pattern. Fully customizable.",
  },
  {
    id: 312,
    title: "Rose Pink Sunburst Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunburstPink,
    description:
      "Vibrant rose pink door panel with dramatic radial sunburst design. Fully customizable.",
  },
  {
    id: 313,
    title: "Tribal Circle Mandala Door",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dTribalGreen,
    description:
      "Intricate sage green door with half-circle tribal mandala featuring zigzag and geometric patterns. Fully customizable.",
  },
  {
    id: 314,
    title: "Mint Sunray Corner Panel",
    category: "3ddoor",
    categoryLabel: "3D Door",
    image: door3dSunrayMint,
    description:
      "Elegant mint green panel with corner sunray design radiating across the surface. Fully customizable.",
  },
  {
    id: 21,
    title: "3D Wall Panel - Wave Design",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: cnc3dWallPanel,
    description:
      "Elegant 3D carved wall panel with modern wave patterns. Fully customizable for any interior.",
  },
  {
    id: 47,
    title: "3D Wall Panel - Swirl Pattern",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelSwirl,
    description:
      "Beautiful swirling organic pattern carved wall panel in teal finish. Fully customizable.",
  },
  {
    id: 48,
    title: "3D Wall Panel - Geometric Circles",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelGeometric,
    description:
      "Modern geometric circle pattern 3D wall panel in teal. Fully customizable.",
  },
  {
    id: 49,
    title: "3D Wall Panel - Leaf Arch",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelLeafArch,
    description:
      "Intricate leaf vine pattern on arched panel in teal finish. Fully customizable.",
  },
  {
    id: 50,
    title: "3D Wall Panel - Peacock Feathers",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFeathers,
    description:
      "Elegant peacock feather design 3D carved panel. Fully customizable.",
  },
  {
    id: 51,
    title: "3D Wall Panel - Tropical Floral",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFloral,
    description:
      "Beautiful tropical floral relief with leaves and flowers. Fully customizable.",
  },
  {
    id: 52,
    title: "3D Wall Panel - Calla Lily",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelCallaLily,
    description:
      "Elegant calla lily 3D relief panel in sage green. Fully customizable.",
  },
  {
    id: 53,
    title: "3D Wall Panel - Twin Peacocks",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelPeacocks,
    description:
      "Stunning twin peacocks with swirl patterns carved panel. Fully customizable.",
  },
  {
    id: 54,
    title: "3D Wall Panel - Lotus Pond",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelLotus,
    description:
      "Beautiful lotus flower pond with lanterns carved panel. Fully customizable.",
  },
  {
    id: 55,
    title: "3D Wall Panel - Flower Sculpture",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFlower,
    description:
      "Large 3D flower sculpture wall art in teal finish. Fully customizable.",
  },
  {
    id: 56,
    title: "3D Wall Panel - Large Lotus",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelLotusLarge,
    description:
      "Beautiful large lotus flower panel with leaves. Fully customizable.",
  },
  {
    id: 57,
    title: "3D Wall Panel - Half Moon Calla",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelCallaHalf,
    description:
      "Elegant half-moon shaped calla lily relief panel. Fully customizable.",
  },
  {
    id: 58,
    title: "3D Wall Panel - Lotus Mandala",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelWaveModern,
    description:
      "Intricate lotus mandala circular carved panel. Fully customizable.",
  },
  {
    id: 59,
    title: "3D Wall Panel - Feather Texture",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFeatherPattern,
    description:
      "Modern feather texture pattern 3D wall panel in teal. Fully customizable.",
  },
  {
    id: 60,
    title: "3D Wall Panel - Modern Waves",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelWaveModern,
    description:
      "Contemporary wave and circular pattern wall installation. Fully customizable.",
  },
  {
    id: 62,
    title: "3D Tropical Foliage Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelTropical,
    description:
      "Lush tropical leaves and foliage carved wall panel. Fully customizable.",
  },
  {
    id: 63,
    title: "3D Abstract Faces Wall Art",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFaces,
    description:
      "Modern minimalist abstract face sculptures in artistic design. Fully customizable.",
  },
  {
    id: 64,
    title: "3D Organic Shapes Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelOrganic,
    description:
      "Contemporary organic curved shapes with concentric line patterns. Fully customizable.",
  },
  {
    id: 65,
    title: "3D Fan Pattern Panels",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelFans,
    description:
      "Elegant radiating fan pattern panels with ribbed design. Fully customizable.",
  },
  {
    id: 66,
    title: "3D Palm Tree Trio Panels",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelPalm,
    description:
      "Set of three decorative panels featuring palm trees, banana leaves, and tropical cottage. Fully customizable.",
  },
  {
    id: 67,
    title: "3D Large Mandala Pattern",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelMandalaLarge,
    description:
      "Intricate large-scale mandala with multiple geometric and floral patterns. Fully customizable.",
  },
  {
    id: 68,
    title: "3D Spiral Floral Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelSpiralFloral,
    description:
      "Dramatic spiral flower design with flowing organic curves. Fully customizable.",
  },
  {
    id: 72,
    title: "3D Circular Sunburst Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelSunburst,
    description:
      "Stunning circular sunburst pattern with radiating geometric design. Fully customizable.",
  },
  {
    id: 73,
    title: "3D Lotus Petal Ring Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelLotusRing,
    description:
      "Intricate circular lotus petal pattern with heart motifs. Fully customizable.",
  },
  {
    id: 94,
    title: "3D Abstract Swirl Panel",
    category: "3dwallpanel",
    categoryLabel: "3D Wall Panel",
    image: wallPanelAbstractSwirl,
    description:
      "Contemporary abstract design with flowing organic swirls and curves. Fully customizable.",
  },
  {
    id: 22,
    title: "3D Decorative Arch",
    category: "3darches",
    categoryLabel: "3D Arches",
    image: cnc3dArch,
    description:
      "Stunning 3D carved decorative arch with floral and traditional patterns. Fully customizable.",
  },
  {
    id: 61,
    title: "3D Elephants Arch Panel",
    category: "3darches",
    categoryLabel: "3D Arches",
    image: archElephants,
    description:
      "Majestic twin elephants with lotus flowers in ornate arch frame. Fully customizable.",
  },
  {
    id: 69,
    title: "3D Shivling Mandir Background",
    category: "3dmandir",
    categoryLabel: "3D Mandir Background",
    image: mandirShivling,
    description:
      "Sacred Shivling with radiating rays and flowing water design for temple backdrop. Fully customizable.",
  },
  {
    id: 70,
    title: "3D Om Symbol Mandala",
    category: "3dmandir",
    categoryLabel: "3D Mandir Background",
    image: mandirOm,
    description:
      "Circular Om symbol with intricate floral mandala patterns for mandir backdrop. Fully customizable.",
  },
  {
    id: 71,
    title: "3D Swastik Sacred Symbol",
    category: "3dmandir",
    categoryLabel: "3D Mandir Background",
    image: mandirSwastik,
    description:
      "Auspicious Swastik symbol with decorative lotus petal border for temple decoration. Fully customizable.",
  },
  {
    id: 42,
    title: "3D Radha Krishna Panel",
    category: "3dradhakrishna",
    categoryLabel: "3D Radha Krishna",
    image: cnc3dRadhaKrishna,
    description:
      "Exquisite 3D carved Radha Krishna wall panel with intricate details. Fully customizable.",
  },
  {
    id: 43,
    title: "3D Radha Krishna with Cows",
    category: "3dradhakrishna",
    categoryLabel: "3D Radha Krishna",
    image: radhaKrishnaTeal,
    description:
      "Beautiful teal 3D relief featuring Radha Krishna with sacred cows and trees. Fully customizable.",
  },
  {
    id: 44,
    title: "3D Radha Krishna Circular Relief",
    category: "3dradhakrishna",
    categoryLabel: "3D Radha Krishna",
    image: radhaKrishnaPink,
    description:
      "Stunning circular 3D carved Radha Krishna with peacock and flute motif. Fully customizable.",
  },
  {
    id: 45,
    title: "3D Modern Radha Krishna Art",
    category: "3dradhakrishna",
    categoryLabel: "3D Radha Krishna",
    image: radhaKrishnaModern,
    description:
      "Contemporary 3D Radha Krishna wall art with modern geometric elements. Fully customizable.",
  },
  {
    id: 46,
    title: "3D Radha Krishna on Swing",
    category: "3dradhakrishna",
    categoryLabel: "3D Radha Krishna",
    image: radhaKrishnaSwing,
    description:
      "Elegant 3D relief of Radha Krishna on swing with peacock and floral garlands. Fully customizable.",
  },
  {
    id: 7,
    title: "Premium Name Plate Design 1",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate1,
    description:
      "Elegant designer name plate with premium finish and modern typography.",
  },
  {
    id: 8,
    title: "Premium Name Plate Design 2",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate2,
    description:
      "Custom crafted name plate with artistic detailing and quality materials.",
  },
  {
    id: 9,
    title: "Premium Name Plate Design 3",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate3,
    description: "Professional signage solution with elegant craftsmanship.",
  },
  {
    id: 10,
    title: "Premium Name Plate Design 4",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate4,
    description: "Modern name plate design with premium materials and finish.",
  },
  {
    id: 11,
    title: "Premium Name Plate Design 5",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate5,
    description: "Stylish name plate with contemporary aesthetics.",
  },
  {
    id: 12,
    title: "Premium Name Plate Design 6",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate6,
    description: "Beautifully designed name plate for homes and offices.",
  },
  {
    id: 13,
    title: "Premium Name Plate Design 7",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate7,
    description: "Exclusive name plate design with attention to detail.",
  },
  {
    id: 14,
    title: "Premium Name Plate Design 8",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: namePlate8,
    description: "High-quality name plate with premium craftsmanship.",
  },
  {
    id: 23,
    title: "Krishna Mantra Oval Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npKrishnaMantra,
    description:
      "Elegant oval name plate with Krishna mantra and golden accents. Fully customizable design.",
  },
  {
    id: 24,
    title: "LED Name Plate - Shivangan",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npLedShivangan,
    description:
      "Beautiful LED backlit name plate with Om symbol and family names. Customizable LED lighting.",
  },
  {
    id: 25,
    title: "Circular Family Name Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npShahCircle,
    description:
      "Classic circular design with golden text and decorative elements. Customizable to your family name.",
  },
  {
    id: 26,
    title: "Swami Samarth Wooden Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npSwamiSamarth,
    description:
      "Traditional wooden name plate with Swami Samarth theme and 3D tree design. Fully customizable.",
  },
  {
    id: 27,
    title: "Traditional House Name Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npSwamiHouse,
    description:
      "Handmade house-shaped name plate with Om symbol and brass bells. Customizable text.",
  },
  {
    id: 28,
    title: "Designer Swami Theme Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npSwamiDesign,
    description:
      "Unique designer name plate with traditional Swami Samarth theme. Fully customizable.",
  },
  {
    id: 29,
    title: "Golden Lotus Name Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npThamarai,
    description:
      "Elegant black and gold name plate with lotus motif. Customizable in multiple languages.",
  },
  {
    id: 30,
    title: "Ganesha Theme Name Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npGanesha,
    description:
      "Beautiful name plate with Ganesha design and flat number. Fully customizable.",
  },
  {
    id: 31,
    title: "Premium Circular Gold Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npRizvinCircle,
    description:
      "Luxurious circular name plate with golden leaves and home icon. Customizable design.",
  },
  {
    id: 32,
    title: "Village Houses Border Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npNopurHouse,
    description:
      "Creative name plate with wooden houses border design. Fully customizable.",
  },
  {
    id: 33,
    title: "Wooden Ganesha Round Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npKoppikar,
    description:
      "Classic wooden round name plate with Ganesha and golden leaves. Customizable text.",
  },
  {
    id: 34,
    title: "Pink Marble Om Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npPatelPink,
    description:
      "Elegant pink marble-finish circular plate with Om and peacock feather. Customizable.",
  },
  {
    id: 35,
    title: "Classic Wooden Heritage Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npSriNilayam,
    description:
      "Beautifully crafted wooden name plate with golden border and bird design. Customizable.",
  },
  {
    id: 36,
    title: "Metal Ornate Villa Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npSreeVilla,
    description:
      "Premium metal name plate with ornate silver design on wood. Fully customizable.",
  },
  {
    id: 37,
    title: "Family Wooden Round Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npJangid,
    description:
      "Warm wooden round plate with family names and floral design. Customizable.",
  },
  {
    id: 38,
    title: "LED Name Plate - Bidave",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npLedBidave,
    description:
      "Stunning LED backlit circular name plate with peacock feather design. Customizable LED lighting.",
  },
  {
    id: 39,
    title: "Elegant White Resin Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npAmanPal,
    description:
      "Beautiful white resin name plate with floral accents and golden text. Customizable.",
  },
  {
    id: 40,
    title: "LED Name Plate - Richard",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npLedRichard,
    description:
      "Elegant LED backlit circular name plate with leaf design. Customizable LED lighting.",
  },
  {
    id: 41,
    title: "Marble Ganesha Frame Plate",
    category: "nameplates",
    categoryLabel: "Name Plates",
    image: npLakshmiNiwas,
    description:
      "Premium marble-finish name plate with Ganesha design and golden frame. Customizable.",
  },
  {
    id: 500,
    title: "Sun Swirl Pattern Safety Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorSunPattern,
    description:
      "Elegant sun swirl pattern safety door jali in stainless steel with wooden frame. Premium security with artistic design.",
  },
  {
    id: 501,
    title: "Oval Floral Jali Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorOvalFloral,
    description:
      "Beautiful oval-shaped floral jali pattern with brass finish on premium wooden door. Traditional elegance with modern security.",
  },
  {
    id: 502,
    title: "Art Deco Arch Safety Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorArtDeco,
    description:
      "Modern art deco style safety door with arch and geometric patterns. Contemporary design with maximum security.",
  },
  {
    id: 503,
    title: "Leaf Pattern Corner Jali",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorLeafCorner,
    description:
      "Decorative leaf pattern corner jali in copper finish. Perfect for door frames and ventilation panels.",
  },
  {
    id: 504,
    title: "Geometric Strip Safety Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorGeometric,
    description:
      "Vertical geometric strip jali pattern on wooden door. Modern minimalist design with high security.",
  },
  {
    id: 505,
    title: "Gold Floral Luxury Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorGoldFloral,
    description:
      "Premium gold-finish floral pattern full door jali with marble frame. Luxurious entrance design.",
  },
  {
    id: 506,
    title: "Hexagonal Pattern Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorHexagonal,
    description:
      "Modern hexagonal geometric jali pattern on diagonal wooden door design. Contemporary style with security.",
  },
  {
    id: 507,
    title: "Flower Circle Copper Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorFlowerCircle,
    description:
      "Elegant interlocking flower circle pattern in copper finish. Classic design with modern security features.",
  },
  {
    id: 508,
    title: "Wave Pattern Double Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorWavePattern,
    description:
      "Stunning wave pattern safety door jali with stainless steel finish. Three-panel design for maximum ventilation.",
  },
  {
    id: 509,
    title: "Sun Spiral Classic Door",
    category: "safetydoorjali",
    categoryLabel: "MS & SS Safety Door Jali",
    image: safetyDoorSunPatternAlt,
    description:
      "Classic sun spiral pattern safety door in silver finish. Timeless design with premium security.",
  },
  {
    id: 600,
    title: "2D God Design - Bal Krishna",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign01,
    description: "Premium laser-cut sacred deity design for gates and panels. Fully customizable.",
  },
  {
    id: 601,
    title: "2D God Design - Radha Krishna1",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign02,
    description: "Intricate 2D laser-cut deity artwork for decorative panels. Fully customizable.",
  },
  {
    id: 602,
    title: "2D God Design - Sherowali Maa",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign03,
    description: "Divine laser-cut god design for temple and home decoration. Fully customizable.",
  },
  {
    id: 603,
    title: "2D God Design - Balaji",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign04,
    description: "Sacred 2D laser-cut design with traditional motifs. Fully customizable.",
  },
  {
    id: 604,
    title: "2D God Design - Ganpati1",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign05,
    description: "Elegant deity laser-cut pattern for gates and grills. Fully customizable.",
  },
  {
    id: 605,
    title: "2D God Design - Ganpati2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign06,
    description: "Premium laser-cut god artwork for decorative installations. Fully customizable.",
  },
  {
    id: 606,
    title: "2D God Design - Sarasvati Mata",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign07,
    description: "Intricate sacred laser-cut design for wall panels. Fully customizable.",
  },
  {
    id: 607,
    title: "2D God Design - Radha Krishna2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign08,
    description: "Divine 2D laser-cut pattern with detailed craftsmanship. Fully customizable.",
  },
  {
    id: 608,
    title: "2D God Design - Hanuman",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign09,
    description: "Traditional deity laser-cut artwork for religious spaces. Fully customizable.",
  },
  {
    id: 609,
    title: "2D God Design - Sherowali Maa2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign10,
    description: "Sacred laser-cut god design for mandir and temple decoration. Fully customizable.",
  },
  {
    id: 610,
    title: "2D God Design - Ganpati3",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign11,
    description: "Elegant 2D laser-cut deity pattern for decorative screens. Fully customizable.",
  },
  {
    id: 611,
    title: "2D God Design - hanuman2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign12,
    description: "Premium sacred laser-cut artwork with intricate detailing. Fully customizable.",
  },
  {
    id: 612,
    title: "2D God Design - krishna1",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign13,
    description: "Divine deity laser-cut design for gates and partitions. Fully customizable.",
  },
  {
    id: 613,
    title: "2D God Design - Radha Krishna3",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign14,
    description: "Traditional 2D god laser-cut pattern for wall art. Fully customizable.",
  },
  {
    id: 614,
    title: "2D God Design - Radha Krishna4",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign15,
    description: "Sacred laser-cut deity artwork for religious installations. Fully customizable.",
  },
  {
    id: 615,
    title: "2D God Design - krishna2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign16,
    description: "Intricate 2D laser-cut god design with fine details. Fully customizable.",
  },
  {
    id: 616,
    title: "2D God Design - Mahadev",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign17,
    description: "Premium deity laser-cut pattern for decorative panels. Fully customizable.",
  },
  {
    id: 617,
    title: "2D God Design - Mahadev2",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign18,
    description: "Divine sacred laser-cut artwork for temple decoration. Fully customizable.",
  },
  {
    id: 618,
    title: "2D God Design - Krishna3",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign19,
    description: "Elegant 2D god laser-cut design for interior applications. Fully customizable.",
  },
  {
    id: 619,
    title: "2D God Design - Krishna4",
    category: "2dgoddesign",
    categoryLabel: "2D God Designs",
    image: godDesign20,
    description: "Premium laser-cut deity pattern for gates and grills. Fully customizable.",
  },

];

const categories = [
  {
    id: "fiber",
    name: "Fiber (FRP)",
    image: fiberRamDarbar,
    description: "Premium FRP sculptures and installations",
  },
  {
    id: "grc",
    name: "GRC",
    image: grcImage,
    description: "Glass fiber reinforced concrete works",
  },
  {
    id: "sculpture",
    name: "Sculpture",
    image: sculptureImage,
    description: "Custom artistic sculptures",
  },
  {
    id: "fountains",
    name: "Fountains",
    image: fountainPool,
    description: "Decorative water fountains",
  },
  {
    id: "3ddoor",
    name: "3D Door",
    image: door3dJali,
    description: "Custom carved doors",
  },
  {
    id: "3dwallpanel",
    name: "3D Wall Panel",
    image: wallPanelSwirl,
    description: "Decorative wall panels",
  },
  {
    id: "3dradhakrishna",
    name: "3D Radha Krishna",
    image: radhaKrishnaTeal,
    description: "Divine Radha Krishna art",
  },
  {
    id: "3darches",
    name: "3D Arches",
    image: cnc3dArch,
    description: "Decorative arch designs",
  },
  {
    id: "3dmandir",
    name: "3D Mandir Background",
    image: mandirOm,
    description: "Sacred mandir backgrounds",
  },
  {
    id: "cnc",
    name: "CNC & Laser",
    image: cncImage,
    description: "Precision CNC and laser cutting",
    hasSubcategories: true,
  },
  {
    id: "nameplates",
    name: "Name Plates",
    image: namePlate1,
    description: "Customizable name plates",
  },
  {
    id: "safetydoorjali",
    name: "MS & SS Safety Door Jali",
    image: safetyDoorGoldFloral,
    description: "Premium metal safety door designs",
  },
];

const cncSubcategories = [
  {
    id: "cnc-general",
    name: "CNC & Laser Cutting",
    image: cncImage,
    description: "Precision laser cut panels and designs",
  },
  {
    id: "royaljali",
    name: "Royal Jali Design",
    image: royalJali01,
    description: "Premium laser-cut jali patterns catalog",
  },
  {
    id: "2dgoddesign",
    name: "2D God Designs",
    image: om_backled_design,
    description: "Mandir back acrylic 2d led design",
  },
];

type ViewState = "categories" | "subcategories" | "images" | "viewer";

export default function Portfolio() {
  const [viewState, setViewState] = useState<ViewState>("categories");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const serviceId = params.get("service");

      if (serviceId) {
        const category = categories.find((c) => c.id === serviceId);

        if (category) {
          if (category.hasSubcategories) {
            setViewState("subcategories");
            setSelectedCategory(category.id);
            setSelectedSubcategory(null);
          } else {
            setViewState("images");
            setSelectedCategory(category.id);
            setSelectedSubcategory(null);
          }
        }
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const getCategoryImages = (categoryId: string) => {
    return portfolioItems.filter((item) => item.category === categoryId);
  };

  const openCategory = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category?.hasSubcategories) {
      setSelectedCategory(categoryId);
      setViewState("subcategories");
    } else {
      setSelectedCategory(categoryId);
      setViewState("images");
    }
  };

  const openSubcategory = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setViewState("images");
  };

  const backToCategories = () => {
    setViewState("categories");
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const backToSubcategories = () => {
    setViewState("subcategories");
    setSelectedSubcategory(null);
  };

  const openImageViewer = (index: number) => {
    setMainImageIndex(index);
    setViewState("viewer");
  };

  const closeViewer = () => {
    setViewState("images");
  };

  const currentCategoryId = selectedSubcategory || selectedCategory;
  const selectedImages = currentCategoryId
    ? getCategoryImages(currentCategoryId)
    : [];
  const mainImage = selectedImages[mainImageIndex];
  const selectedCategoryInfo = selectedSubcategory
    ? cncSubcategories.find((c) => c.id === selectedSubcategory)
    : categories.find((c) => c.id === selectedCategory);
  const parentCategoryInfo = categories.find((c) => c.id === selectedCategory);

  const handlePrevious = () => {
    setMainImageIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setMainImageIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1,
    );
  };

  const shuffleVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    }),
    exit: { opacity: 0, scale: 0.8, rotate: 5, transition: { duration: 0.2 } },
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-portfolio-title"
          >
            Our Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning artistic works and installations
            across various categories. Click on a category to view all works.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewState === "categories" && (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {categories.map((category, index) => {
                const itemCount = category.hasSubcategories
                  ? cncSubcategories.reduce((acc, sub) => acc + getCategoryImages(sub.id).length, 0)
                  : getCategoryImages(category.id).length;
                const displayText = category.hasSubcategories ? `${cncSubcategories.length} subcategories` : `${itemCount} items`;
                return (
                  <motion.div
                    key={category.id}
                    custom={index}
                    variants={shuffleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Card
                      className="group overflow-hidden cursor-pointer hover-elevate"
                      onClick={() => openCategory(category.id)}
                      data-testid={`card-category-${category.id}`}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h3 className="text-white font-semibold text-sm mb-1">
                              {category.name}
                            </h3>
                            <div className="flex items-center gap-1 text-white/70 text-xs">
                              <Images className="w-3 h-3" />
                              <span>{displayText}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {viewState === "subcategories" && selectedCategory && (
            <motion.div
              key="subcategories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  onClick={backToCategories}
                  className="gap-2"
                  data-testid="button-back-categories"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Categories
                </Button>
                <Badge variant="secondary">
                  {parentCategoryInfo?.name}
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cncSubcategories.map((subcategory, index) => {
                  const itemCount = getCategoryImages(subcategory.id).length;
                  return (
                    <motion.div
                      key={subcategory.id}
                      custom={index}
                      variants={shuffleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Card
                        className="group overflow-hidden cursor-pointer hover-elevate"
                        onClick={() => openSubcategory(subcategory.id)}
                        data-testid={`card-subcategory-${subcategory.id}`}
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={subcategory.image}
                            alt={subcategory.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h3 className="text-white font-semibold text-sm mb-1">
                                {subcategory.name}
                              </h3>
                              <p className="text-white/60 text-xs mb-1 line-clamp-1">
                                {subcategory.description}
                              </p>
                              <div className="flex items-center gap-1 text-white/70 text-xs">
                                <Images className="w-3 h-3" />
                                <span>{itemCount} items</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {viewState === "images" && (selectedCategory || selectedSubcategory) && (
            <motion.div
              key="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  onClick={selectedSubcategory ? backToSubcategories : backToCategories}
                  className="gap-2"
                  data-testid="button-back-categories"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {selectedSubcategory ? `Back to ${parentCategoryInfo?.name}` : "Back to Categories"}
                </Button>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {selectedCategoryInfo?.name}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {selectedImages.length} items
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {selectedImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    custom={index}
                    variants={shuffleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Card
                      className="group overflow-hidden cursor-pointer hover-elevate"
                      onClick={() => openImageViewer(index)}
                      data-testid={`card-image-${image.id}`}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-semibold text-xs line-clamp-2">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {viewState === "viewer" && mainImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            data-testid="gallery-viewer-overlay"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeViewer}
                  className="text-white hover:bg-white/10"
                  data-testid="button-back-images"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <h2
                  className="text-white text-xl font-semibold"
                  data-testid="text-gallery-category"
                >
                  {selectedCategoryInfo?.name}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeViewer}
                className="text-white hover:bg-white/10"
                data-testid="button-close-gallery"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 relative flex items-center justify-center p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePrevious}
                  className="absolute left-4 z-10 text-white hover:bg-white/10"
                  data-testid="button-gallery-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <motion.div
                  key={mainImage.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl w-full flex flex-col items-center"
                >
                  <img
                    src={mainImage.image}
                    alt={mainImage.title}
                    className="max-h-[50vh] w-auto object-contain rounded-lg"
                    data-testid="img-gallery-main"
                  />
                  <div className="mt-4 text-center">
                    <h3
                      className="text-white text-lg font-medium"
                      data-testid="text-gallery-title"
                    >
                      {mainImage.title}
                    </h3>
                    <p
                      className="text-white/70 text-sm mt-1 max-w-lg"
                      data-testid="text-gallery-description"
                    >
                      {mainImage.description}
                    </p>
                  </div>
                </motion.div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNext}
                  className="absolute right-4 z-10 text-white hover:bg-white/10"
                  data-testid="button-gallery-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>

              <div className="p-4 border-t border-white/10">
                <p className="text-white/50 text-sm mb-2 text-center">
                  {mainImageIndex + 1} of {selectedImages.length}
                </p>
                <ScrollArea className="w-full">
                  <div className="flex gap-2 pb-2 justify-center">
                    {selectedImages.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setMainImageIndex(index)}
                        className={`flex-shrink-0 rounded-md overflow-hidden transition-all ${index === mainImageIndex
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-black"
                          : "opacity-60 hover:opacity-100"
                          }`}
                        data-testid={`button-thumbnail-${image.id}`}
                      >
                        <img
                          src={image.image}
                          alt={image.title}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

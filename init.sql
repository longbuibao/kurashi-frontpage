--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12
-- Dumped by pg_dump version 14.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: BlogRegistrationList; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."BlogRegistrationList" (
    id text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: Catalog; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Catalog" (
    id text NOT NULL,
    name text NOT NULL,
    size text NOT NULL,
    "sizeUnit" text NOT NULL,
    "isAvailable" boolean NOT NULL,
    thumbnail text NOT NULL,
    "pdfLink" text DEFAULT '#'::text NOT NULL
);


--
-- Name: Category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    name text NOT NULL,
    "isSpecialCategory" boolean NOT NULL
);


--
-- Name: CategoryIntro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."CategoryIntro" (
    id text NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    "categoryId" text
);


--
-- Name: ContactRegistrationList; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ContactRegistrationList" (
    id text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    "phoneNumber" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    name text NOT NULL
);


--
-- Name: PageMetadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."PageMetadata" (
    id text NOT NULL,
    "pageTitleId" text,
    "pageName" text DEFAULT 'PLEASE ADD YOUR PAGE TITLE NAME HERE'::text NOT NULL
);


--
-- Name: PageTitle; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."PageTitle" (
    id text NOT NULL,
    page text NOT NULL,
    title text NOT NULL
);


--
-- Name: Post; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    title text NOT NULL,
    content text,
    published boolean DEFAULT false NOT NULL,
    "viewCount" integer DEFAULT 0 NOT NULL,
    "authorId" text,
    thumbnail text NOT NULL,
    url text DEFAULT '#'::text NOT NULL,
    "postCategoryId" text,
    "isTrending" boolean DEFAULT false NOT NULL,
    summary text DEFAULT 'Post summary'::text NOT NULL
);


--
-- Name: PostCategory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."PostCategory" (
    id text NOT NULL,
    "categoryName" text NOT NULL,
    published boolean DEFAULT false NOT NULL
);


--
-- Name: Product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    name text NOT NULL,
    "categoryId" text,
    "subCategoryId" text,
    thumbnail text DEFAULT '#'::text NOT NULL,
    url text DEFAULT '#'::text NOT NULL,
    "isAvailable" boolean DEFAULT false NOT NULL,
    "productId" text DEFAULT ''::text NOT NULL,
    "primaryProductImage" text DEFAULT '#'::text NOT NULL,
    "productVideo" text DEFAULT '#'::text NOT NULL,
    "hasLandingPage" boolean DEFAULT false NOT NULL,
    "landingPageUrl" text DEFAULT '#'::text NOT NULL,
    "shortIntro" text DEFAULT ''::text NOT NULL,
    "order" integer DEFAULT '-1'::integer NOT NULL
);


--
-- Name: ProductColor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductColor" (
    id text NOT NULL,
    name text NOT NULL,
    "colorHex" text NOT NULL,
    "productId" text
);


--
-- Name: ProductComponent; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductComponent" (
    id text NOT NULL,
    name text NOT NULL,
    "productId" text
);


--
-- Name: ProductDimension; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductDimension" (
    id text NOT NULL,
    name text NOT NULL,
    value double precision NOT NULL,
    "productSizeId" text
);


--
-- Name: ProductImages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductImages" (
    id text NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    "imageUrl" text NOT NULL,
    "productId" text,
    "productSizeId" text
);


--
-- Name: ProductIntro; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductIntro" (
    id text NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    "introImg" text NOT NULL,
    "productId" text
);


--
-- Name: ProductMaterial; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductMaterial" (
    id text NOT NULL,
    name text NOT NULL
);


--
-- Name: ProductMetadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductMetadata" (
    id text NOT NULL,
    "productId" text
);


--
-- Name: ProductOrigin; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductOrigin" (
    id text NOT NULL,
    name text NOT NULL
);


--
-- Name: ProductSize; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductSize" (
    id text NOT NULL,
    quantity integer NOT NULL,
    "twoDimCad" text NOT NULL,
    "productManual" text NOT NULL,
    "productId" text,
    unit text DEFAULT 'mm'::text NOT NULL
);


--
-- Name: ProductTag; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductTag" (
    id text NOT NULL,
    name text NOT NULL,
    "productId" text
);


--
-- Name: ProductVariants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."ProductVariants" (
    id text NOT NULL,
    "variantName" text NOT NULL,
    thumbnail text DEFAULT '#'::text NOT NULL,
    unit text DEFAULT 'unit'::text NOT NULL
);


--
-- Name: SubCategory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SubCategory" (
    id text NOT NULL,
    name text NOT NULL,
    thumbnail text NOT NULL,
    "categoryId" text
);


--
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    name text
);


--
-- Name: _ProductComponentToProductMaterial; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."_ProductComponentToProductMaterial" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


--
-- Name: _ProductToProductOrigin; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."_ProductToProductOrigin" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


--
-- Name: _ProductToProductVariants; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."_ProductToProductVariants" (
    "A" text NOT NULL,
    "B" text NOT NULL
);


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Data for Name: BlogRegistrationList; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."BlogRegistrationList" (id, email, "createdAt", "updatedAt") FROM stdin;
b40f84e0-2bf9-49ff-a564-80add18ad60c	blong1102@gmail.com	2024-05-21 16:36:04.569	2024-05-21 16:36:04.569
1d709c58-35eb-40fa-8001-2b9d7707194f	s@gmail.com	2024-05-27 02:19:20.402	2024-05-27 02:19:20.402
4a9f57a1-7822-4420-b399-f57354bc1d81	udemy@dgroup.co	2024-08-04 02:39:09.18	2024-08-04 02:39:09.18
\.


--
-- Data for Name: Catalog; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Catalog" (id, name, size, "sizeUnit", "isAvailable", thumbnail, "pdfLink") FROM stdin;
d8632855-1b73-4a2e-88a8-e5490d875fab	Ga thoát sàn	2MB		t	https://storage.googleapis.com/kurashi_frontpage_files/images/Bia_catalog.jpg	https://storage.googleapis.com/kurashi_frontpage_files/catalogs/Catalog_ga_thoat_san_KURASHI.pdf
ffa2a460-80d4-4f77-b80a-8409affe2e21	Thép tráng men	11	MB	t	https://storage.googleapis.com/kurashi_frontpage_files/images/Catalog_TTM.jpg	https://storage.googleapis.com/kurashi_frontpage_files/catalogs/Catalog_thep_trang_men.pdf
\.


--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Category" (id, name, "isSpecialCategory") FROM stdin;
6dd9b410-9f66-4fd6-b117-0628c8eb3aa5	bathroom-tiles	f
02444cc2-baed-4499-8f5c-ea3984680382	Ga thoát sàn	f
3266cb59-112c-4bbf-aa11-6ebe0eeedb5e	Ga thoát sàn	f
ce45e1f2-bedf-477f-8105-c0fa53e167a2	Thép tráng men	f
\.


--
-- Data for Name: CategoryIntro; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."CategoryIntro" (id, title, content, "categoryId") FROM stdin;
af4d1d56-654c-4198-be1e-f7c48819df6f	Ga thoát sàn	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,	02444cc2-baed-4499-8f5c-ea3984680382
\.


--
-- Data for Name: ContactRegistrationList; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ContactRegistrationList" (id, email, message, "phoneNumber", "createdAt", "updatedAt", name) FROM stdin;
e2f5ce3c-1086-4961-9b9d-17fdc0de6070	blong1102@gmail.com	Please contact me	0782577816	2024-05-21 16:35:54.817	2024-05-21 16:35:54.817	Bùi Bảo Long
62825f05-d725-4aca-853b-2c3285f4bcf4	blong1102@gmail.comm	j	0782577816	2024-09-07 10:55:53.934	2024-09-07 10:55:53.934	Bùi Bảo Long
\.


--
-- Data for Name: PageMetadata; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."PageMetadata" (id, "pageTitleId", "pageName") FROM stdin;
\.


--
-- Data for Name: PageTitle; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."PageTitle" (id, page, title) FROM stdin;
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Post" (id, "createdAt", "updatedAt", title, content, published, "viewCount", "authorId", thumbnail, url, "postCategoryId", "isTrending", summary) FROM stdin;
c5af7d9d-8a8f-4d89-820b-24604efd7cd7	2024-03-14 14:32:26.014	2024-03-14 14:32:26.034	Thép tráng men có gì hay	A luxurious enamel kitchen panel. A masterpiece baked at approximately 800℃.	t	100	8c4ceaa4-bfa9-4e8a-8f52-0d44981163df	https://storage.googleapis.com/kurashi_frontpage_files/images/blog_3.png	#	e6b8b835-86ec-4fd8-b7aa-397685f3b518	f	Cấu tạo 6 lớp và tính chất đặc biệt của vật liệu thép tráng men
737616b1-6758-4c41-8993-36a4a330de54	2024-03-14 14:32:26.014	2024-03-14 14:32:26.034	Bếp tiện lợi với phụ kiện nam châm	A luxurious enamel kitchen panel. A masterpiece baked at approximately 800℃.	t	100	8c4ceaa4-bfa9-4e8a-8f52-0d44981163df	https://storage.googleapis.com/kurashi_frontpage_files/images/blog_1.png	#	b6fc2af8-31e0-448c-8ab5-cc1f01b915f9	f	Bếp tiện lợi với phụ kiện nam châm di chuyển tự do
21c465f0-0fbf-4993-9016-d407f351c1eb	2024-09-15 17:38:19.499	2024-09-15 17:38:19.499	Nhà vệ sinh không mùi hôi		t	0	\N	https://storage.googleapis.com/kurashi_frontpage_files/images/blog_2.png	#	\N	f	Nhà vệ sinh hết mùi hôi và tắc nghẽn nhờ ga thoát sàn tích hợp bộ xả chuyên dụng
\.


--
-- Data for Name: PostCategory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."PostCategory" (id, "categoryName", published) FROM stdin;
e6b8b835-86ec-4fd8-b7aa-397685f3b518	bathroom-accessories	t
bcc417de-e1b1-408e-92f1-e4fe140a6ac9	drain-floor	t
b6fc2af8-31e0-448c-8ab5-cc1f01b915f9	furniture-howto	t
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Product" (id, name, "categoryId", "subCategoryId", thumbnail, url, "isAvailable", "productId", "primaryProductImage", "productVideo", "hasLandingPage", "landingPageUrl", "shortIntro", "order") FROM stdin;
f9a7c808-f80f-4d07-bfc8-f6777a71a1d4	Thép tráng men	ce45e1f2-bedf-477f-8105-c0fa53e167a2	\N	https://storage.googleapis.com/kurashi_frontpage_files/images/products/thep-trang-men.png	#	t		#	#	t	/thep-trang-men		1
0953416b-f68f-4fb7-b546-3f958b401d04	Ga thoát sàn dài	02444cc2-baed-4499-8f5c-ea3984680382	\N	https://storage.googleapis.com/kurashi_frontpage_files/images/products/gts-dai.png	#	t	KSP-GTS-450114	#	https://www.youtube.com/watch?v=BSLhfbM36KM	f	#		3
36fee85f-1453-456e-9cd7-7eacafef3e43	Ga thoát sàn lát gạch	02444cc2-baed-4499-8f5c-ea3984680382	\N	https://storage.googleapis.com/kurashi_frontpage_files/images/products/gts-lat-gach.png	#	t	KSP-GTS-112	https://storage.googleapis.com/kurashi_frontpage_files/images/PRIMARY_GTS_LAT_GACH_1.png	https://www.youtube.com/watch?v=5dYHmVv6F74	f	#		2
\.


--
-- Data for Name: ProductColor; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductColor" (id, name, "colorHex", "productId") FROM stdin;
bbfb1cb5-6ac8-4394-95a8-75eb72583ec4	red	#1f522c	0953416b-f68f-4fb7-b546-3f958b401d04
362949ca-9a27-492b-826b-81f88502e632	black	#1f3052	0953416b-f68f-4fb7-b546-3f958b401d04
acfdb599-9b56-4067-8b71-d8b9eabe3532	green	#3e1f52	0953416b-f68f-4fb7-b546-3f958b401d04
d419a507-cd8b-44fe-9080-e78407039214	white	#c92222	36fee85f-1453-456e-9cd7-7eacafef3e43
274d8129-ce67-4f84-930c-53cccd8f519d	yellow	#c2b795	36fee85f-1453-456e-9cd7-7eacafef3e43
\.


--
-- Data for Name: ProductComponent; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductComponent" (id, name, "productId") FROM stdin;
7bc2d1a3-f3ad-4d3b-9420-4a522b439ddc	Phần bộ xả	36fee85f-1453-456e-9cd7-7eacafef3e43
8bb44c10-af3f-491a-9183-8cfde3dcdebf	Phần thân	36fee85f-1453-456e-9cd7-7eacafef3e43
6bfcb869-2257-49f1-8d2d-9816e86f53ef	Phần thân	0953416b-f68f-4fb7-b546-3f958b401d04
0e57316a-be83-4c25-bd69-901f8dc38413	Phần bộ xả	0953416b-f68f-4fb7-b546-3f958b401d04
\.


--
-- Data for Name: ProductDimension; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductDimension" (id, name, value, "productSizeId") FROM stdin;
5e7e5b09-511f-463b-a571-2e7821e74102	E	5	f86f7d0f-5578-4c20-ac97-2ec66be4461b
a51293af-f000-4211-95e9-f49a9d038db0	D	4	f86f7d0f-5578-4c20-ac97-2ec66be4461b
5fd29d7d-deb4-42d4-8d5f-7a1a01347f36	C	3	f86f7d0f-5578-4c20-ac97-2ec66be4461b
bbae8477-4ba9-48dd-b583-281b186122dc	B	2	f86f7d0f-5578-4c20-ac97-2ec66be4461b
86612579-a662-474a-8f40-cf121b5ffdfd	A	1	f86f7d0f-5578-4c20-ac97-2ec66be4461b
dca90b2f-981a-45fd-979a-d68c14d466c0	A	198	82623198-dca9-480a-bada-8a281d598b0d
ed072884-651b-41bd-a0c9-ab69c17253de	B	198	82623198-dca9-480a-bada-8a281d598b0d
e1462f9b-6fe3-47c6-909f-cd5d686d3017	F	99	82623198-dca9-480a-bada-8a281d598b0d
d91b1a82-1afb-41e5-ab1f-10d713cb6b9a	A	598	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
3ba38759-e227-416f-9edb-015e2f427991	B	198	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
36ba0471-5dbd-4069-8b4f-819573807048	A	448	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
e897106d-b4a4-4e35-a9eb-66f9d0c4971b	B	148	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
4f6c6fda-b85a-40f5-9366-3c30f560e59c	C	166.5	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
921c7a82-4290-4337-a21f-1018bc1307cf	D	57	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
5d074a5a-1b51-49b8-9c61-948c8d5991f8	E	84.5	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
a950dca5-9c5b-4a72-93e5-ffd55b7f6627	F	100	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
3b9f0cb4-e2d8-42ce-a516-9616b4618380	A	148	45113cfb-55d4-432e-a435-e26a35e16bc3
dcc38649-1403-45e1-82ae-08a541cee0f1	B	148	45113cfb-55d4-432e-a435-e26a35e16bc3
bc306e03-833d-429b-af52-b5ba08634f76	C	167	45113cfb-55d4-432e-a435-e26a35e16bc3
60e18663-f5c2-4ae7-b686-4a2ffdcf4558	D	57.5	45113cfb-55d4-432e-a435-e26a35e16bc3
310a9142-d1f3-465e-acec-b8b6906472cd	E	84.5	45113cfb-55d4-432e-a435-e26a35e16bc3
21e36fdb-4ac1-47fc-9f5a-81414f2efbb1	F	74	45113cfb-55d4-432e-a435-e26a35e16bc3
84e62588-e252-4a90-bf7e-1e51e4c06afe	B	148	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
46a62a60-76c1-4e52-86fb-19c2c5d687ee	C	167	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
fe34bd7f-02a7-497d-9999-7bde5f19c112	D	57.5	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
1ba26610-6a76-4c32-bbbf-d033eb521542	E	84.5	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
e900db70-7369-4637-b74a-50d31748b434	A	598	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
6f759708-6049-40a8-b0de-9825db902c6e	F	100	b9a287a3-26c6-4ab7-959d-e65c5ecf44f6
260e5355-3153-41f3-9d2a-f447fd3d4d54	A	748	adc0a40d-90ab-47f7-af46-0532196344ea
2a2c553c-39f0-4c4d-8573-d025ffadc9e1	B	148	adc0a40d-90ab-47f7-af46-0532196344ea
db4c09df-cfe0-4c22-b6ef-93f9f27ce652	C	166.5	adc0a40d-90ab-47f7-af46-0532196344ea
1f1d690c-b277-497a-b4a1-3968fc8dce8c	D	57	adc0a40d-90ab-47f7-af46-0532196344ea
2cdc5b83-e7ce-41df-bfc5-617d64e7b0e9	E	84.5	adc0a40d-90ab-47f7-af46-0532196344ea
1351b62e-968f-4e6b-8304-c40ffbcb82ac	F	100	adc0a40d-90ab-47f7-af46-0532196344ea
613f5419-e383-4e75-9e62-9ab0855a2c8d	A	898	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
d2834279-b9b5-40da-aaff-2b9afcc006f9	B	148	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
361f665c-96bb-4f61-8bdf-d45c896372b8	C	166.5	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
49b7b227-9743-487e-afb1-162fae506b91	D	57	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
a188be74-03e1-4ec1-9e6c-e6d56d6e07a6	E	84.5	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
be0c260a-0715-45df-9a5c-6916f0dcd67b	F	100	f22b6025-b78e-43fb-bf3a-0a1b42f2706c
4ea74b94-ce1d-4805-bb7e-812be17bf5b3	C	166.5	82623198-dca9-480a-bada-8a281d598b0d
c3ee6374-da18-4efb-bf75-8537b91984e6	D	57	82623198-dca9-480a-bada-8a281d598b0d
c74885df-b920-4f49-a403-dc746f8d6461	E	84.5	82623198-dca9-480a-bada-8a281d598b0d
774c0900-ca60-4548-92b0-7318fedad511	E	84.5	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
8f38452f-73b9-4849-af87-156339ed3d75	E	84.5	c27f90af-be70-4174-b712-a9726a44cc64
fc9c4c29-1177-4e6c-8031-bfd76be71e52	C	166.5	e53837e7-90db-48d6-8179-e9906b7f883f
87ae7e9a-f0b0-4c62-9fc9-6f16f9f21f25	C	149.5	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
2e384970-e74d-439c-9efa-b3b69e276f6c	D	40	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
bb1eaaa2-b966-49b0-8547-ce4c42efe450	F	150	ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c
09f69393-6885-40ab-abcd-a13f46867684	A	798	c27f90af-be70-4174-b712-a9726a44cc64
4bdc5b81-f4c0-4caa-8fe3-3b457b27c9e8	B	198	c27f90af-be70-4174-b712-a9726a44cc64
411c31f6-4089-48c2-bd90-90b91aa867a1	C	150.5	c27f90af-be70-4174-b712-a9726a44cc64
208a9d53-f051-4889-9378-852c7d0bd31c	D	41	c27f90af-be70-4174-b712-a9726a44cc64
ee232fe3-1075-4191-bf24-b52c78b06f33	F	150	c27f90af-be70-4174-b712-a9726a44cc64
145bf0c9-02ff-49bf-8382-6a9e8107f596	A	248	e53837e7-90db-48d6-8179-e9906b7f883f
21cda90a-02ac-48af-830e-99f5887ba408	B	248	e53837e7-90db-48d6-8179-e9906b7f883f
c01a4f96-738f-44ed-bb67-1130ac4bcf68	D	57	e53837e7-90db-48d6-8179-e9906b7f883f
2eb0381d-141e-41c9-842b-426863f565e7	E	84.5	e53837e7-90db-48d6-8179-e9906b7f883f
2a0418e1-216d-4cf5-8227-7c73d01c5694	F	124	e53837e7-90db-48d6-8179-e9906b7f883f
1c9544e8-6f10-4b94-94eb-349e6c537e94	B	148	01f7cd31-12ab-4b03-b616-417fc5656443
a5dcd4fd-acc8-4427-a3b3-1c000fbf5b9f	C	166.5	01f7cd31-12ab-4b03-b616-417fc5656443
7703be32-8a6d-4242-b39f-76473e0b28f9	E	84.5	01f7cd31-12ab-4b03-b616-417fc5656443
f57cfd29-6d91-4b4e-96a3-374d27ed35e4	F	100	01f7cd31-12ab-4b03-b616-417fc5656443
1d978624-2188-4cdd-8f37-ff17f1df780a	A	448	01f7cd31-12ab-4b03-b616-417fc5656443
5a481dbe-9fc1-4ee2-b5b9-976b4effcd01	D	57.5	01f7cd31-12ab-4b03-b616-417fc5656443
\.


--
-- Data for Name: ProductImages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductImages" (id, title, content, "imageUrl", "productId", "productSizeId") FROM stdin;
c570bc2f-1fa6-4ec9-b0a5-634ff2e17dee			https://storage.googleapis.com/kurashi_frontpage_files/images/STRUCTURE_GTS_LAT_GACH.png	\N	f86f7d0f-5578-4c20-ac97-2ec66be4461b
56dc7c09-136f-447b-afa7-ae36ce522679			https://storage.googleapis.com/kurashi_frontpage_files/images/STRUCTURE_GTS_DAI.png	\N	5ba03bd0-8460-4a08-b0db-58246bd7c4f2
\.


--
-- Data for Name: ProductIntro; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductIntro" (id, title, content, "introImg", "productId") FROM stdin;
5e7a9665-ad64-4848-8d27-31e8be717962	Đa dạng kích thước, thiết kế thông minh	Có nhiều kích thước để lựa chọn, ngang tối đa 250mm, dài tối đa 900mm.Vì ga thoát sàn dài và rộng nên thoát nước dễ dàng, không bị nghẹt nước. Ga thoát sàn dễ tháo rời phần nắp và lưới lọc rác để vệ sinh nhờ tích hợp sẵn móc kéo. 	#	0953416b-f68f-4fb7-b546-3f958b401d04
a1c52284-91dc-4644-ad81-af7a3c71aa0a	Hết lo mùi hôi và côn trùng nhờ bộ xả chuyên dụng	Được trang bị bộ xả riêng tích hợp lọc rác và nắp trong để ngăn mùi trào ngược và côn trùng để nhà tắm của bạn lúc nào cũng sạch sẽ, vệ sinh. Bộ xả được làm bằng nhựa ABS, loại chuyên chống hóa chất để tránh bị hư hại bởi các loại hóa chất thường dùng.	#	36fee85f-1453-456e-9cd7-7eacafef3e43
765a3e7c-d20b-4761-8cdc-df31ff99aa3f	Thiết kế thông minh, tỉ mỉ theo phong cách Nhật Bản	Được thiết kế với khung inox dày 2mm, có thể lắp gạch trang trí, dễ tháo rời phần nắp và lưới lọc rác để vệ sinh nhờ tích hợp sẵn móc kéo, kích thước 150x150 rộng giúp thoát nước nhanh chóng và không nghẹt nước.	https://storage.googleapis.com/kurashi_frontpage_files/images/INTRO_GTS_LAT_GACH.png	36fee85f-1453-456e-9cd7-7eacafef3e43
d141524e-a8c3-488c-b8b1-13cf12ff9a62	Hết lo mùi hôi và côn trùng nhờ bộ xả chuyên dụng	Được trang bị bộ xả riêng tích hợp lọc rác và nắp trong để ngăn mùi trào ngược và côn trùng để nhà tắm của bạn lúc nào cũng sạch sẽ, vệ sinh. Bộ xả được làm bằng nhựa ABS, loại chuyên chống hóa chất để tránh bị hư hại bởi các loại hóa chất thường dùng.	https://storage.googleapis.com/kurashi_frontpage_files/images/INTRO_GTS_DAI.png	0953416b-f68f-4fb7-b546-3f958b401d04
\.


--
-- Data for Name: ProductMaterial; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductMaterial" (id, name) FROM stdin;
63f4df2f-6020-40d9-a7e5-b826ccbf7475	inox-304
72134430-4acd-4ea0-aca7-48e30f4c3606	medical-anti-abs
\.


--
-- Data for Name: ProductMetadata; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductMetadata" (id, "productId") FROM stdin;
aa29c61e-9581-481d-a888-191837e03d5a	0953416b-f68f-4fb7-b546-3f958b401d04
94b47af7-478e-4c18-a374-bbe4e243b3e1	36fee85f-1453-456e-9cd7-7eacafef3e43
\.


--
-- Data for Name: ProductOrigin; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductOrigin" (id, name) FROM stdin;
b088f23c-a0af-4f7f-b268-854cc306d896	japan
\.


--
-- Data for Name: ProductSize; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductSize" (id, quantity, "twoDimCad", "productManual", "productId", unit) FROM stdin;
adc0a40d-90ab-47f7-af46-0532196344ea	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-750116.pdf	#	\N	mm
f22b6025-b78e-43fb-bf3a-0a1b42f2706c	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-900117.pdf	#	\N	mm
e53837e7-90db-48d6-8179-e9906b7f883f	5	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-250121.pdf	#	\N	mm
01f7cd31-12ab-4b03-b616-417fc5656443	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-450114.pdf	#	\N	mm
5ba03bd0-8460-4a08-b0db-58246bd7c4f2	4	#	#	0953416b-f68f-4fb7-b546-3f958b401d04	mm
f86f7d0f-5578-4c20-ac97-2ec66be4461b	8	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-112.pdf	https://storage.googleapis.com/kurashi_frontpage_files/user_manual/HDSD_GTS_LAT_GACH.pdf	36fee85f-1453-456e-9cd7-7eacafef3e43	mm
82623198-dca9-480a-bada-8a281d598b0d	10	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-200118.pdf	#	\N	mm
ec72ed0b-8b39-4e3b-9e96-45b62aeb9c0c	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-600119.pdf	#	\N	mm
c27f90af-be70-4174-b712-a9726a44cc64	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-800120.pdf	#	\N	mm
45113cfb-55d4-432e-a435-e26a35e16bc3	10	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-150113.pdf	#	\N	mm
b9a287a3-26c6-4ab7-959d-e65c5ecf44f6	4	https://storage.googleapis.com/kurashi_frontpage_files/cad/KSP-GTS-600115.pdf	#	\N	mm
\.


--
-- Data for Name: ProductTag; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductTag" (id, name, "productId") FROM stdin;
8b90889e-bda1-49d8-bda4-5e7903207db0	mới	0953416b-f68f-4fb7-b546-3f958b401d04
fff23957-60b9-44f9-810e-af8776d0890b	thoát sàn	0953416b-f68f-4fb7-b546-3f958b401d04
8506f34f-6a6f-4dae-aae5-395460bda34e	mới	36fee85f-1453-456e-9cd7-7eacafef3e43
4e91de3b-a92b-4569-a078-34b66c21d548	thoát sàn	36fee85f-1453-456e-9cd7-7eacafef3e43
\.


--
-- Data for Name: ProductVariants; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."ProductVariants" (id, "variantName", thumbnail, unit) FROM stdin;
a2f32946-f5e8-4c09-a458-13823a9e9ed8	Ngang 150		mm
1cc0ca47-d82b-411e-82cb-64ffa0e20454	Ngang 200		mm
a84e0f2d-ab1c-4f7e-b71c-0ca55af5c13e	Ngang 250		mm
\.


--
-- Data for Name: SubCategory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."SubCategory" (id, name, thumbnail, "categoryId") FROM stdin;
34c13416-0843-4d44-a03d-de502644f1fa	Subcategory 1	subcategory1.jpg	3266cb59-112c-4bbf-aa11-6ebe0eeedb5e
5ffc322a-a778-45ff-a721-4cc225694aea	Subcategory 2	subcategory2.jpg	02444cc2-baed-4499-8f5c-ea3984680382
7b22335c-d820-449f-ab5b-a151763bbeab	Subcategory 3	subcategory3.jpg	6dd9b410-9f66-4fd6-b117-0628c8eb3aa5
a2213b4a-8afb-44e4-8b30-52ebefaa4cb7	Subcategory 4	subcategory2.jpg	02444cc2-baed-4499-8f5c-ea3984680382
0714d32f-dba1-4a89-b435-c46f79db836f	Subcategory 5	subcategory3.jpg	6dd9b410-9f66-4fd6-b117-0628c8eb3aa5
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."User" (id, email, name) FROM stdin;
cf61ec0c-b85d-4c72-9801-ca0cce8937bd	user2@example.com	User 2
8c4ceaa4-bfa9-4e8a-8f52-0d44981163df	user3@example.com	bui bao long
\.


--
-- Data for Name: _ProductComponentToProductMaterial; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."_ProductComponentToProductMaterial" ("A", "B") FROM stdin;
6bfcb869-2257-49f1-8d2d-9816e86f53ef	63f4df2f-6020-40d9-a7e5-b826ccbf7475
7bc2d1a3-f3ad-4d3b-9420-4a522b439ddc	63f4df2f-6020-40d9-a7e5-b826ccbf7475
8bb44c10-af3f-491a-9183-8cfde3dcdebf	72134430-4acd-4ea0-aca7-48e30f4c3606
0e57316a-be83-4c25-bd69-901f8dc38413	72134430-4acd-4ea0-aca7-48e30f4c3606
\.


--
-- Data for Name: _ProductToProductOrigin; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."_ProductToProductOrigin" ("A", "B") FROM stdin;
0953416b-f68f-4fb7-b546-3f958b401d04	b088f23c-a0af-4f7f-b268-854cc306d896
36fee85f-1453-456e-9cd7-7eacafef3e43	b088f23c-a0af-4f7f-b268-854cc306d896
\.


--
-- Data for Name: _ProductToProductVariants; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."_ProductToProductVariants" ("A", "B") FROM stdin;
0953416b-f68f-4fb7-b546-3f958b401d04	a2f32946-f5e8-4c09-a458-13823a9e9ed8
0953416b-f68f-4fb7-b546-3f958b401d04	a84e0f2d-ab1c-4f7e-b71c-0ca55af5c13e
0953416b-f68f-4fb7-b546-3f958b401d04	1cc0ca47-d82b-411e-82cb-64ffa0e20454
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1789fb83-dab0-455f-aaee-031ef579cde9	a3f52b2120e9222fbe1eed8f9785ca8da79fefda5a3c0a24491acde09bff17ca	2024-03-14 14:32:25.167502+00	20240314143225_init	\N	\N	2024-03-14 14:32:25.076715+00	1
3f4f8939-b089-4903-bbdd-7b7c37d46c61	299d7b41762ec5ee48c26318cd6f501aa5cdb7f324722f319a06707de81475cb	2024-04-07 01:59:39.993047+00	20240407015939_add_category_intros	\N	\N	2024-04-07 01:59:39.950493+00	1
ae136e07-17fc-4065-9f89-7ee1ce1bd6db	709b268ea6a8be52c4e61bca9d4704252aa1f9b2547fe555d0105e30d5e07340	2024-03-14 16:02:50.864363+00	20240314160250_add_url_to_post	\N	\N	2024-03-14 16:02:50.857208+00	1
fb1b5ab8-4ddb-4f60-9a39-d03fb242fcb5	5f4db3276a15a594fbf3edd223b78e3575cd47484b650f83b9e35b859993653a	2024-03-17 13:49:04.521083+00	20240317134904_add_product_size_image	\N	\N	2024-03-17 13:49:04.507696+00	1
3e934cbb-ca11-4833-8214-093c0de7f479	fdb96fbbf08508f51abe598baa0c96210141abed45be80fff7c1e97d3c77a0c1	2024-03-14 16:50:49.62622+00	20240314165049_add_url_and_thumbnail_to_product	\N	\N	2024-03-14 16:50:49.613328+00	1
3fd9110b-d1b9-44b8-8374-f3947a5d22bb	0e88b9459b872d740671f321e1725a12023f897f96ffe8588ec971b0d3fd79d8	2024-03-14 17:03:21.850718+00	20240314170321_add_is_available_to_product	\N	\N	2024-03-14 17:03:21.837321+00	1
7e7e7863-70a4-4cdf-af33-347c8294a4a8	42423056cc71f3af347b91bd1ee6dff23c9841d263108b64be01e23c18195d9c	2024-03-31 02:11:07.151639+00	20240331021107_add_product_variant	\N	\N	2024-03-31 02:11:07.108629+00	1
3dac3c14-c575-4803-a879-79360900b2a1	44a4ca7e18a5c1e65c558e4871075338282ca99cd6c9c48f91dd7bab23f05e9b	2024-03-16 03:08:37.716647+00	20240316030837_add_material_and_origin	\N	\N	2024-03-16 03:08:37.62627+00	1
8079da2b-9b2f-445c-8096-bddb6bc55789	97291b303160a9acb775ed0c588c67766013450c58f7fce19c1956c3ca811890	2024-03-18 14:24:50.579819+00	20240318142450_add_product_metadata_table	\N	\N	2024-03-18 14:24:50.544609+00	1
ca899b93-9a93-4574-aecf-b9a6a3b232ba	531d4496b25bab4357fcc6ea663ca681dd02f3a36060e28620cdd9ef5c880ed0	2024-03-16 05:02:29.938166+00	20240316050229_add_component_for_product	\N	\N	2024-03-16 05:02:29.871293+00	1
51928f97-1d00-4c99-a19d-ed10c8b86be0	76583cc5547ad6d86fb588b9689187e30edbc2aa455b9b385349aa08eb240454	2024-03-16 05:11:10.485433+00	20240316051110_add_name_to_product	\N	\N	2024-03-16 05:11:10.471372+00	1
f7dd932c-bd8f-4158-8263-e15feb4078ee	02b94f9a99cbeb6b2676261140b733da401bb90e91fdbdf477b20018c3c7ebfb	2024-03-16 07:27:20.761676+00	20240316072720_add_prodcutid_to_component	\N	\N	2024-03-16 07:27:20.739155+00	1
ecee8d1a-0bb9-499a-82f1-3c0f1e56576a	667eb8cdee54a47db4d89d3d83654b64c92f47d556a1c26b107522f3ba233216	2024-03-23 14:09:29.44077+00	20240323140929_add_post_category	\N	\N	2024-03-23 14:09:29.40921+00	1
71eac4ad-a316-44e4-88cb-f24a056a99a1	6ef473cb2740941454bfda9378a66613c9b557f5d85ac81c60ce729905e489ce	2024-03-16 08:04:55.761559+00	20240316080455_remove_material_id_from_component	\N	\N	2024-03-16 08:04:55.751869+00	1
8faa1b62-21ab-4ece-b545-6c9d357df94d	c5f64cfb4ad2ee48feb624c8ec4d119869b20e4081bbb994e19b10e86f343798	2024-03-16 15:44:41.03797+00	20240316154440_add_product_size_table	\N	\N	2024-03-16 15:44:40.98269+00	1
7e1454ab-1f6e-460c-955f-4513dcd47c6f	5e54af423bfcfaea9b242bd40dce5c48cd60866c86e18d56b7e4fee944a0e774	2024-03-16 16:01:19.282887+00	20240316160119_add_dimension_to_product_size	\N	\N	2024-03-16 16:01:19.260546+00	1
6dd4f1ba-9c53-4c3c-b8d4-e2a2823e78f8	6d0806018f8d7c7139bb933baf45e1e9936b9f4591ab396c64e2fbc7e0cc062b	2024-03-23 14:14:13.518752+00	20240323141413_add_post_trending_bool	\N	\N	2024-03-23 14:14:13.505245+00	1
bb285e74-4061-43d8-9714-b86f3d99bbeb	b12062f47021b6dcf4f05a9e420365caa63983b4d8aa9e3b98da999d99246acb	2024-03-16 16:41:22.698914+00	20240316164122_add_unit_to_product_size	\N	\N	2024-03-16 16:41:22.685157+00	1
a7272cf5-4e56-47a6-920d-420762c96f06	80bf89310e39f4cc0bb31686f5628a064200cea62dea8b87ababb9ee02c070bf	2024-03-17 04:39:28.324092+00	20240317043928_add_product_intro	\N	\N	2024-03-17 04:39:28.285558+00	1
f55facb3-474b-445e-8a3b-370a3980a991	a4e409b85d812985601aec0bf640b340bd24369fb1b5cdb54e0cbe8fd9a94201	2024-03-31 02:24:37.939637+00	20240331022437_add_product_variant_thumbnail	\N	\N	2024-03-31 02:24:37.925681+00	1
049429b0-7154-4486-963b-315a48ebb0c9	9b3a04939d1347dcceff64a47b27b55ad66382a55105c007c6e4f84758caecf0	2024-03-24 07:30:05.43009+00	20240324073005_add_postcategory_ispublished	\N	\N	2024-03-24 07:30:05.413935+00	1
14fc4b8b-d9f2-4914-ba5a-8d80860b011f	cc2d9c13be39cd8958e435577e5a7ff38728013e5fb328ff138c573ed70e5a04	2024-03-28 15:17:13.574729+00	20240328151713_add_product_color	\N	\N	2024-03-28 15:17:13.540975+00	1
58a62816-8822-461b-a5c1-8f3283b312f9	379f02c65ad942bf017fa0de19219a873efa54b11ac235a2c6a3511db9fda575	2024-03-29 13:29:38.429874+00	20240329132938_add_product_tags	\N	\N	2024-03-29 13:29:38.385453+00	1
99aea0de-f1ce-49fa-afd7-ce479f6e4ae5	46925a9b7d0609bb99ff5218dad4692d208a2c4da766e7ca297561400d55f789	2024-03-31 02:37:11.77294+00	20240331023711_modify_product_variant	\N	\N	2024-03-31 02:37:11.757204+00	1
60b23bdd-c023-44a3-9929-a850e43525c7	b44c662898c6bd8c9e1da8b4cabbd4a5b3b0a536abda3dadefb995f42b38b74d	2024-03-30 03:00:02.017425+00	20240330030002_add_post_summary	\N	\N	2024-03-30 03:00:02.006685+00	1
2eeb668f-e66c-4b24-9f6a-f6d9d73c5b86	d4246419d56640fbd950979dd4c5299fc0a5174431b646ba93fecdc45ada7c61	2024-04-11 14:38:21.725215+00	20240411143821_add_products_images	\N	\N	2024-04-11 14:38:21.682691+00	1
d63a8939-1521-4abe-8efa-560b47022b0e	e1957be70ed7f8e05dea1050ea50a63bd9ffec8491d20a62a8321627810a75cb	2024-03-31 03:05:16.591077+00	20240331030516_modify_product_m_n	\N	\N	2024-03-31 03:05:16.55801+00	1
751d1676-effc-4989-a172-a6499b53c0fc	cd2e8c8c76422253b9d1262aa5d6078eb108907611db1e606fa734ea858622dd	2024-04-04 16:20:15.496757+00	20240404162015_add_variant_unit	\N	\N	2024-04-04 16:20:15.483631+00	1
b5526792-6ccd-4dc0-bb1f-286736b6de05	6f95e66edea9be2fc713772054abd664bf414d455fa2b7c3813e7e1fbcf31dbb	2024-04-14 11:37:27.9368+00	20240414113727_add_products_primary_image_remove_null	\N	\N	2024-04-14 11:37:27.928333+00	1
54d51a13-0824-4c49-8a6d-0189342f5155	8d75b6b19317ddc8eaad13d068ad7eb8fc6c1b5a033f645145458f23d5d099f6	2024-04-13 02:24:56.630421+00	20240413022456_add_product_size_images	\N	\N	2024-04-13 02:24:56.604615+00	1
953dfb5c-7b4f-4d90-9129-50b1416e21d8	f463c3adc41157b34cbda9399e0669b1a45b3da787b1e00015ae2da87ee87f26	2024-04-14 11:33:34.368955+00	20240414113334_add_products_primary_image	\N	\N	2024-04-14 11:33:34.3562+00	1
4011446d-fe14-432a-9422-319bc4339179	26d7e178f03b3cbf6c877b691a5d937baee9afc57ccfe25f5d53338735d65b67	2024-05-04 16:22:44.664384+00	20240504161226_add_product_video_links	\N	\N	2024-05-04 16:22:44.651413+00	1
5eb09873-436e-4857-87bf-8af23f18a868	cae8fdc7fa1a4ba12ec5a6fb984cbbbca811aa9f75d97e41dad0e5645d2212be	2024-05-03 15:16:34.614723+00	20240503141458_add_page_metadata	\N	\N	2024-05-03 15:16:34.578093+00	1
94ea3a2d-1613-47df-a468-e61928de8b53	9370a29e0b1d9593d51b68a6083b86ee69425e84f9d3810242f3cbb5cf230b89	2024-05-03 15:16:34.65979+00	20240503142509_add_page_name	\N	\N	2024-05-03 15:16:34.645715+00	1
3f040a15-2b32-4899-b914-bcd4e8fa600a	7ed23707dd656e1525d8149e5103c7d32fce1b23aa8ef3e5da3efd723409da41	2024-05-03 15:16:34.638882+00	20240503141821_change_id_to_optional	\N	\N	2024-05-03 15:16:34.620832+00	1
5538d0ea-0183-41ad-a612-da3ffb004b83	ce03f78864f2ba7c17ab124519fbde965233344976c8c144b41a3a22166be41c	2024-05-05 08:15:51.068867+00	20240505081548_add_blog_registration_list	\N	\N	2024-05-05 08:15:49.638069+00	1
1f106574-f8e5-4bdf-925a-88e57cb66de8	3ac232a41592b4386254251c80b265795310eae4cb55b4657fedb28a29f6de8c	2024-05-05 12:48:42.977825+00	20240505124840_add_contact_registration_list	\N	\N	2024-05-05 12:48:41.802553+00	1
2c0f9614-6ea3-4f97-a1f1-16b0545582f1	55d91cc8fc7fa09a7a2677e25d276339af94e85beca76003944a7263099390f2	2024-05-05 12:58:09.771188+00	20240505125807_add_contact_registration_list_add_name	\N	\N	2024-05-05 12:58:08.689213+00	1
10526435-4852-4220-b473-defeb3626cb9	804a74204b753461c742c81d96ac8349d3af79e7a2ad10f0bc88bfedd56556f9	2024-05-11 05:58:34.266427+00	20240511055832_try_to_remove_product_relation	\N	\N	2024-05-11 05:58:33.227938+00	1
bd4bb5d1-4c83-4ca2-b9ef-a12d119ab63e	e1957be70ed7f8e05dea1050ea50a63bd9ffec8491d20a62a8321627810a75cb	2024-05-11 09:06:26.382724+00	20240511090623_add_back_mn_relation	\N	\N	2024-05-11 09:06:25.335646+00	1
f29e3ed4-a43e-4c8a-bb40-88d0742a520a	0dfab1f92d5d3dbceec5f54e05a19350b75509f0a3d3ba3f7b31cf89732a1e09	2024-05-25 07:07:42.336646+00	20240525070740_add_catalog_model	\N	\N	2024-05-25 07:07:41.322292+00	1
95120af0-4e70-4d5d-aa9f-5a6726096b1a	eae48e354c06df0bfaa2a600007312b64f5e3e545486c3c08ceb05618dfb429f	2024-05-25 07:25:16.910008+00	20240525072514_add_catalog_pdf_link	\N	\N	2024-05-25 07:25:15.920453+00	1
b5716d29-a97c-41d5-a681-44d78e1ade2a	01e26546b8cbc5bba3168534b2110670e22514826ec966afbf4bad2f97ca6487	2024-09-11 16:16:07.224946+00	20240908085643_add_product_landing_page	\N	\N	2024-09-11 16:16:07.157095+00	1
271d9250-a46b-47a2-a2fc-78d98c6b09c2	2e219538955ee5851c899f1c69e972f826c2f8e2dc210bcbede35ed785d15014	\N	20240908090345_add_default_value_for_has_landing_page_and_landingpageurl	A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20240908090345_add_default_value_for_has_landing_page_and_landingpageurl\n\nDatabase error code: 23502\n\nDatabase error:\nERROR: column "landingPageUrl" of relation "Product" contains null values\n\nDbError { severity: "ERROR", parsed_severity: Some(Error), code: SqlState(E23502), message: "column \\"landingPageUrl\\" of relation \\"Product\\" contains null values", detail: None, hint: None, position: None, where_: None, schema: Some("public"), table: Some("Product"), column: Some("landingPageUrl"), datatype: None, constraint: None, file: Some("tablecmds.c"), line: Some(5901), routine: Some("ATRewriteTable") }\n\n   0: sql_schema_connector::apply_migration::apply_script\n           with migration_name="20240908090345_add_default_value_for_has_landing_page_and_landingpageurl"\n             at schema-engine/connectors/sql-schema-connector/src/apply_migration.rs:106\n   1: schema_core::commands::apply_migrations::Applying migration\n           with migration_name="20240908090345_add_default_value_for_has_landing_page_and_landingpageurl"\n             at schema-engine/core/src/commands/apply_migrations.rs:91\n   2: schema_core::state::ApplyMigrations\n             at schema-engine/core/src/state.rs:201	2024-09-11 17:05:27.099839+00	2024-09-11 16:16:07.231462+00	0
67932bbb-c254-46e3-8a10-423aed5b0a7a	2e219538955ee5851c899f1c69e972f826c2f8e2dc210bcbede35ed785d15014	2024-09-11 17:06:36.435411+00	20240908090345_add_default_value_for_has_landing_page_and_landingpageurl	\N	\N	2024-09-11 17:06:35.280634+00	1
79ae35b2-3439-4f1b-8507-e228b6c89a33	3df8c035f70688a2222eb7c0e070376a8621f44776d69cc0d9690493d930330a	2024-09-15 04:49:12.188519+00	20240914073030_add_product_short_intro_text	\N	\N	2024-09-15 04:49:12.146796+00	1
f2e80306-c5c3-4f1c-802d-f023a564708f	a6b7ae0a472efcad12c2fbfda4a5add6beccda75e14d0636523e1ad20cdfc15c	2024-09-15 10:25:36.077762+00	20240915065713_add_product_render_order	\N	\N	2024-09-15 10:25:36.016747+00	1
\.


--
-- Name: BlogRegistrationList BlogRegistrationList_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."BlogRegistrationList"
    ADD CONSTRAINT "BlogRegistrationList_pkey" PRIMARY KEY (id);


--
-- Name: Catalog Catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Catalog"
    ADD CONSTRAINT "Catalog_pkey" PRIMARY KEY (id);


--
-- Name: CategoryIntro CategoryIntro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."CategoryIntro"
    ADD CONSTRAINT "CategoryIntro_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: ContactRegistrationList ContactRegistrationList_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ContactRegistrationList"
    ADD CONSTRAINT "ContactRegistrationList_pkey" PRIMARY KEY (id);


--
-- Name: PageMetadata PageMetadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."PageMetadata"
    ADD CONSTRAINT "PageMetadata_pkey" PRIMARY KEY (id);


--
-- Name: PageTitle PageTitle_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."PageTitle"
    ADD CONSTRAINT "PageTitle_pkey" PRIMARY KEY (id);


--
-- Name: PostCategory PostCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."PostCategory"
    ADD CONSTRAINT "PostCategory_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: ProductColor ProductColor_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductColor"
    ADD CONSTRAINT "ProductColor_pkey" PRIMARY KEY (id);


--
-- Name: ProductComponent ProductComponent_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductComponent"
    ADD CONSTRAINT "ProductComponent_pkey" PRIMARY KEY (id);


--
-- Name: ProductDimension ProductDimension_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductDimension"
    ADD CONSTRAINT "ProductDimension_pkey" PRIMARY KEY (id);


--
-- Name: ProductImages ProductImages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductImages"
    ADD CONSTRAINT "ProductImages_pkey" PRIMARY KEY (id);


--
-- Name: ProductIntro ProductIntro_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductIntro"
    ADD CONSTRAINT "ProductIntro_pkey" PRIMARY KEY (id);


--
-- Name: ProductMaterial ProductMaterial_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductMaterial"
    ADD CONSTRAINT "ProductMaterial_pkey" PRIMARY KEY (id);


--
-- Name: ProductMetadata ProductMetadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductMetadata"
    ADD CONSTRAINT "ProductMetadata_pkey" PRIMARY KEY (id);


--
-- Name: ProductOrigin ProductOrigin_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductOrigin"
    ADD CONSTRAINT "ProductOrigin_pkey" PRIMARY KEY (id);


--
-- Name: ProductSize ProductSize_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductSize"
    ADD CONSTRAINT "ProductSize_pkey" PRIMARY KEY (id);


--
-- Name: ProductTag ProductTag_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductTag"
    ADD CONSTRAINT "ProductTag_pkey" PRIMARY KEY (id);


--
-- Name: ProductVariants ProductVariants_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductVariants"
    ADD CONSTRAINT "ProductVariants_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: SubCategory SubCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SubCategory"
    ADD CONSTRAINT "SubCategory_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: ProductMetadata_productId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "ProductMetadata_productId_key" ON public."ProductMetadata" USING btree ("productId");


--
-- Name: ProductSize_productId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "ProductSize_productId_key" ON public."ProductSize" USING btree ("productId");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: _ProductComponentToProductMaterial_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_ProductComponentToProductMaterial_AB_unique" ON public."_ProductComponentToProductMaterial" USING btree ("A", "B");


--
-- Name: _ProductComponentToProductMaterial_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_ProductComponentToProductMaterial_B_index" ON public."_ProductComponentToProductMaterial" USING btree ("B");


--
-- Name: _ProductToProductOrigin_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_ProductToProductOrigin_AB_unique" ON public."_ProductToProductOrigin" USING btree ("A", "B");


--
-- Name: _ProductToProductOrigin_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_ProductToProductOrigin_B_index" ON public."_ProductToProductOrigin" USING btree ("B");


--
-- Name: _ProductToProductVariants_AB_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_ProductToProductVariants_AB_unique" ON public."_ProductToProductVariants" USING btree ("A", "B");


--
-- Name: _ProductToProductVariants_B_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_ProductToProductVariants_B_index" ON public."_ProductToProductVariants" USING btree ("B");


--
-- Name: CategoryIntro CategoryIntro_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."CategoryIntro"
    ADD CONSTRAINT "CategoryIntro_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: PageMetadata PageMetadata_pageTitleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."PageMetadata"
    ADD CONSTRAINT "PageMetadata_pageTitleId_fkey" FOREIGN KEY ("pageTitleId") REFERENCES public."PageTitle"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Post Post_postCategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_postCategoryId_fkey" FOREIGN KEY ("postCategoryId") REFERENCES public."PostCategory"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductColor ProductColor_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductColor"
    ADD CONSTRAINT "ProductColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductComponent ProductComponent_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductComponent"
    ADD CONSTRAINT "ProductComponent_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductDimension ProductDimension_productSizeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductDimension"
    ADD CONSTRAINT "ProductDimension_productSizeId_fkey" FOREIGN KEY ("productSizeId") REFERENCES public."ProductSize"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductImages ProductImages_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductImages"
    ADD CONSTRAINT "ProductImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductImages ProductImages_productSizeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductImages"
    ADD CONSTRAINT "ProductImages_productSizeId_fkey" FOREIGN KEY ("productSizeId") REFERENCES public."ProductSize"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductIntro ProductIntro_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductIntro"
    ADD CONSTRAINT "ProductIntro_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductMetadata ProductMetadata_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductMetadata"
    ADD CONSTRAINT "ProductMetadata_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductSize ProductSize_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductSize"
    ADD CONSTRAINT "ProductSize_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: ProductTag ProductTag_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."ProductTag"
    ADD CONSTRAINT "ProductTag_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Product Product_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Product Product_subCategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES public."SubCategory"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: SubCategory SubCategory_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SubCategory"
    ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: _ProductComponentToProductMaterial _ProductComponentToProductMaterial_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductComponentToProductMaterial"
    ADD CONSTRAINT "_ProductComponentToProductMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES public."ProductComponent"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductComponentToProductMaterial _ProductComponentToProductMaterial_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductComponentToProductMaterial"
    ADD CONSTRAINT "_ProductComponentToProductMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES public."ProductMaterial"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToProductOrigin _ProductToProductOrigin_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductToProductOrigin"
    ADD CONSTRAINT "_ProductToProductOrigin_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToProductOrigin _ProductToProductOrigin_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductToProductOrigin"
    ADD CONSTRAINT "_ProductToProductOrigin_B_fkey" FOREIGN KEY ("B") REFERENCES public."ProductOrigin"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToProductVariants _ProductToProductVariants_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductToProductVariants"
    ADD CONSTRAINT "_ProductToProductVariants_A_fkey" FOREIGN KEY ("A") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ProductToProductVariants _ProductToProductVariants_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."_ProductToProductVariants"
    ADD CONSTRAINT "_ProductToProductVariants_B_fkey" FOREIGN KEY ("B") REFERENCES public."ProductVariants"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: FUNCTION pg_replication_origin_advance(text, pg_lsn); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_create(text); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_drop(text); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_oid(text); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_progress(text, boolean); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_is_setup(); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_progress(boolean); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_reset(); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_setup(text); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_xact_reset(); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn); Type: ACL; Schema: pg_catalog; Owner: -
--

-- GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO cloudsqlsuperuser;


--
-- PostgreSQL database dump complete
--


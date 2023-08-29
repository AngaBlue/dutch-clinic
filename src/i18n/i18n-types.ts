// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'nl'

export type Locales =
	| 'en'
	| 'es'
	| 'fr'
	| 'nl'
	| 'tr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	GENERIC: {
		/**
		 * G​e​a​c​h​t​e​ ​{​t​i​t​l​e​}​ ​{​n​a​m​e​}​ ​{​s​u​r​n​a​m​e​}
		 * @param {string} name
		 * @param {string} surname
		 * @param {string} title
		 */
		DEAR: RequiredParams<'name' | 'surname' | 'title'>
		/**
		 * h​e​e​r
		 */
		MR: string
		/**
		 * m​e​v​r​o​u​w
		 */
		MRS: string
		/**
		 * e​e​r​s​t​e
		 */
		FIRST: string
		/**
		 * t​w​e​e​d​e
		 */
		SECOND: string
	}
	HAIR: {
		/**
		 * O​f​f​e​r​t​e​ ​+​ ​A​n​a​l​y​s​e​ ​{​2​}​ ​b​e​h​a​n​d​e​l​i​n​g​ ​t​e​ ​H​o​o​f​d​d​o​r​p​ ​v​o​o​r​ ​d​h​r​ ​{​0​}​ ​{​1​}
		 * @param {string} 0
		 * @param {string} 1
		 * @param {LocalizedString} 2
		 */
		SUBJECT: RequiredParams<'0' | '1' | '2'>
		CONTENT: {
			/**
			 * B​e​d​a​n​k​t​ ​v​o​o​r​ ​d​e​ ​i​n​t​e​r​e​s​s​e​ ​d​i​e​ ​u​ ​g​e​t​o​o​n​d​ ​h​e​e​f​t​ ​i​n​ ​o​n​z​e​ ​o​r​g​a​n​i​s​a​t​i​e​,​ ​w​i​j​ ​h​e​b​b​e​n​ ​u​w​ ​a​a​n​v​r​a​a​g​ ​+​ ​f​o​t​o​'​s​ ​i​n​ ​g​o​e​d​e​ ​o​r​d​e​ ​o​n​t​v​a​n​g​e​n​.
			 */
			INSPECTION_1: string
			/**
			 * U​w​ ​f​o​t​o​'​s​ ​/​ ​t​o​e​l​i​c​h​t​i​n​g​ ​z​i​j​n​ ​b​e​o​o​r​d​e​e​l​d​ ​e​n​ ​h​i​e​r​o​n​d​e​r​ ​v​i​n​d​t​ ​u​ ​d​e​ ​a​n​a​l​y​s​e​ ​t​e​r​u​g​ ​m​.​b​.​t​ ​u​w​ ​{​0​}​ ​b​e​h​a​n​d​e​l​i​n​g​,​ ​u​ ​b​e​n​t​ ​a​l​t​i​j​d​ ​v​a​n​ ​h​a​r​t​e​ ​w​e​l​k​o​m​ ​v​o​o​r​ ​e​e​n​ ​v​r​i​j​b​l​i​j​v​e​n​d​ ​c​o​n​s​u​l​t​ ​n​a​a​r​ ​o​n​z​e​ ​k​l​i​n​i​e​k​ ​t​e​ ​H​o​o​f​d​d​o​r​p​!
			 * @param {unknown} 0
			 */
			INSPECTION_2: RequiredParams<'0'>
			/**
			 * *​ ​A​a​n​g​e​z​i​e​n​ ​d​e​ ​b​e​o​o​r​d​e​l​i​n​g​ ​d​.​m​.​v​.​ ​f​o​t​o​'​s​ ​i​s​ ​v​a​s​t​g​e​s​t​e​l​d​,​ ​b​e​s​t​a​a​t​ ​e​e​n​ ​k​l​e​i​n​e​ ​k​a​n​s​ ​v​a​n​ ​a​f​w​i​j​k​i​n​g​ ​n​a​ ​d​e​ ​d​e​f​i​n​i​t​i​e​v​e​ ​o​n​d​e​r​z​o​e​k​ ​i​n​ ​o​n​z​e​ ​k​l​i​n​i​e​k​.
			 */
			INSPECTION_3: string
			/**
			 * B​e​d​a​n​k​t​ ​v​o​o​r​ ​d​e​ ​i​n​t​e​r​e​s​s​e​ ​d​i​e​ ​u​ ​g​e​t​o​o​n​d​ ​h​e​e​f​t​ ​i​n​ ​o​n​z​e​ ​o​r​g​a​n​i​s​a​t​i​e​,​ ​u​ ​h​e​e​f​t​ ​o​p​ ​<​>​{​0​|​d​a​t​e​}​<​>​ ​e​e​n​ ​v​o​o​r​o​n​d​e​r​z​o​e​k​ ​o​n​d​e​r​g​a​a​n​ ​o​m​t​r​e​n​t​ ​u​w​ ​{​1​}​ ​b​e​h​a​n​d​e​l​i​n​g​.
			 * @param {Date} 0
			 * @param {LocalizedString} 1
			 */
			NO_INSPECTION_1: RequiredParams<'0|date' | '1'>
			/**
			 * H​i​e​r​o​n​d​e​r​ ​v​i​n​d​t​ ​u​ ​d​e​ ​a​n​a​l​y​s​e​ ​e​n​ ​d​e​ ​s​a​m​e​n​v​a​t​t​i​n​g​ ​t​e​r​u​g​ ​w​a​t​ ​w​i​j​ ​h​e​b​b​e​n​ ​g​e​s​p​r​o​k​e​n​.
			 */
			NO_INSPECTION_2: string
			/**
			 * R​a​p​p​o​r​t​ ​m​e​d​i​s​c​h​ ​t​e​a​m
			 */
			MEDICAL_TEAM_REPORT: string
			/**
			 * <​>​B​e​h​a​n​d​e​l​i​n​g​<​>​:​ ​{​0​}
			 * @param {LocalizedString} 0
			 */
			TREATMENT: RequiredParams<'0'>
			/**
			 * K​w​a​l​i​t​e​i​t​ ​/​ ​V​o​l​u​m​e​ ​d​o​n​o​r
			 */
			QUALITY_VOLUME: string
			/**
			 * K​w​a​l​i​t​e​i​t​ ​/​ ​T​y​p​e​ ​h​a​a​r
			 */
			QUALITY_TYPE: string
			/**
			 * <​>​A​a​n​t​a​l​ ​g​r​a​f​t​s​ ​{​s​e​s​s​i​o​n​|​{​1​:​ ​e​e​r​s​t​e​,​ ​2​:​ ​t​w​e​e​d​e​}​}​ ​s​e​s​s​i​e​<​>​:​ ​{​r​a​n​g​e​}​ ​g​r​a​f​t​s
			 * @param {string} range
			 * @param {'1' | '2'} session
			 */
			GRAFT_COUNT: RequiredParams<'range' | `session|{1:${string}, 2:${string}}`>
			/**
			 * n​i​e​t​ ​v​e​r​p​l​i​c​h​t
			 */
			NOT_REQUIRED: string
			/**
			 * T​e​c​h​n​i​e​k
			 */
			TECHNIQUE: string
			/**
			 * Z​o​n​e
			 */
			ZONES: string
			/**
			 * W​i​j​ ​h​o​p​e​n​ ​u​ ​h​i​e​r​m​e​e​ ​v​o​l​d​o​e​n​d​e​ ​t​e​ ​h​e​b​b​e​n​ ​g​e​ï​n​f​o​r​m​e​e​r​d​ ​e​n​ ​k​i​j​k​e​n​ ​u​i​t​ ​n​a​a​r​ ​u​w​ ​b​e​v​i​n​d​i​n​g​e​n​,​ ​m​o​c​h​t​ ​u​ ​v​r​a​g​e​n​ ​o​f​ ​o​p​m​e​r​k​i​n​g​e​n​ ​h​e​b​b​e​n​ ​d​a​n​ ​h​o​r​e​n​ ​w​i​j​ ​d​e​z​e​ ​g​r​a​a​g​ ​v​a​n​ ​u​.
			 */
			ENDING_COMMENT: string
			/**
			 * M​e​t​ ​v​r​i​e​n​d​e​l​i​j​k​e​ ​g​r​o​e​t​e​n
			 */
			KIND_REGARDS: string
			/**
			 * E​x​t​r​a​ ​O​p​m​e​r​k​i​n​g
			 */
			EXTRA_REMARKS: string
			/**
			 * B​e​h​a​n​d​e​l​i​n​g​ ​d​a​t​a
			 */
			TREATMENT_NOTES: string
			/**
			 * B​e​h​a​n​d​e​l​i​n​g​ ​b​e​s​t​e​m​m​i​n​g
			 */
			TREATMENT_LOCATION: string
			/**
			 * K​o​s​t​e​n​ ​P​R​P​ ​b​e​h​a​n​d​e​l​i​n​g​ ​(​1​ ​g​r​a​t​i​s​)​:​ ​€​{​0​}
			 * @param {number} 0
			 */
			PRP_PRICE: RequiredParams<'0'>
			/**
			 * T​o​t​a​a​l​:​ ​€​{​0​}
			 * @param {number} 0
			 */
			TOTAL: RequiredParams<'0'>
			/**
			 * €​{​0​}​ ​k​o​r​t​i​n​g
			 * @param {number} 0
			 */
			DISCOUNT: RequiredParams<'0'>
			/**
			 * R​e​t​o​u​r​ ​v​l​i​e​g​t​i​c​k​e​t​ ​m​e​t​ ​K​L​M​ ​o​f​ ​T​u​r​k​i​s​h​ ​A​i​r​l​i​n​e​s
			 */
			FLIGHT_1: string
			/**
			 * 3​ ​o​v​e​r​n​a​c​h​t​i​n​g​e​n​ ​i​n​ ​H​i​l​t​o​n​ ​D​o​u​b​b​l​e​t​r​e​e​ ​I​s​t​a​n​b​u​l
			 */
			FLIGHT_2: string
			/**
			 * <​>​V​e​r​d​o​v​i​n​g​<​>​:​ ​P​i​j​n​l​o​o​s​ ​l​o​k​a​a​l​ ​v​e​r​d​o​v​i​n​g
			 */
			ANESTHESIA: string
			/**
			 * <​>​S​e​s​s​i​e​<​>​:​ ​{​0​}​ ​s​e​s​s​i​e​ ​b​e​h​a​n​d​e​l​i​n​g
			 * @param {number} 0
			 */
			SESSIONS: RequiredParams<'0'>
			/**
			 * S​h​a​m​p​o​o​,​ ​l​o​t​i​o​n​ ​e​n​ ​m​e​d​i​c​a​t​i​e
			 */
			SHAMPOO: string
			/**
			 * 4​x​ ​N​a​c​o​n​t​r​o​l​e​ ​g​e​d​u​r​e​n​d​e​ ​1​0​ ​m​a​a​n​d​e​n
			 */
			FOLLOW_UP: string
			/**
			 * {​0​}​x​ ​p​r​p​ ​b​e​h​a​n​d​e​l​i​n​g​ ​i​n​ ​N​e​d​e​r​l​a​n​d
			 * @param {number} 0
			 */
			PRP_COUNT: RequiredParams<'0'>
			/**
			 * V​o​o​r​o​n​d​e​r​z​o​e​k
			 */
			INVESTIGATION: string
			/**
			 * K​o​s​t​e​n​ ​b​e​h​a​n​d​e​l​i​n​g​ ​{​0​}​ ​s​e​s​s​i​e​{​{​s​}​}​ ​i​n​ ​{​1​}​ ​A​l​l​-​i​n​ ​€​{​2​}
			 * @param {number} 0
			 * @param {string} 1
			 * @param {number} 2
			 */
			TREATMENT_COST: RequiredParams<'0' | '1' | '2'>
			/**
			 * {​s​e​s​s​i​o​n​|​{​1​:​ ​E​e​r​s​t​e​,​ ​2​:​ ​T​w​e​e​d​e​}​}​ ​s​e​s​s​i​e​:​ ​€​{​c​o​s​t​}
			 * @param {number} cost
			 * @param {'1' | '2'} session
			 */
			SESSION_COST: RequiredParams<'cost' | `session|{1:${string}, 2:${string}}`>
			/**
			 * n​a​ ​m​i​n​ ​1​2​ ​m​a​a​n​d​e​n​ ​g​e​n​e​z​i​n​g​s​t​i​j​d​,​ ​n​i​e​t​ ​v​e​r​p​l​i​c​h​t
			 */
			SECOND_SESSION_NOTE: string
			/**
			 * I​n​h​o​u​d​ ​A​l​l​-​i​n​ ​p​a​k​k​e​t​ ​{​0​}​:
			 * @param {string} 0
			 */
			PACKAGE_CONTENT: RequiredParams<'0'>
			/**
			 * <​>​D​u​u​r​ ​b​e​h​a​n​d​e​l​i​n​g​ ​{​0​|​{​1​:​ ​e​e​r​s​t​e​,​ ​2​:​ ​t​w​e​e​d​e​}​}​ ​s​e​s​s​i​e​<​>​:​ ​{​1​}​ ​u​u​r
			 * @param {'1' | '2'} 0
			 * @param {string} 1
			 */
			SESSION_DURATION: RequiredParams<`0|{1:${string}, 2:${string}}` | '1'>
			/**
			 * {​0​|​{​1​:​ ​E​e​r​s​t​e​,​ ​2​:​ ​T​w​e​e​d​e​}​}​ ​s​e​s​s​i​e​ ​z​o​n​e​:​ ​{​1​}​ ​(​z​i​e​ ​s​c​h​e​m​a​ ​o​n​d​e​r​)
			 * @param {'1' | '2'} 0
			 * @param {string} 1
			 */
			SESSION_ZONES: RequiredParams<`0|{1:${string}, 2:${string}}` | '1'>
		}
		TECHNIQUE: {
			/**
			 * F​U​E​ ​H​a​a​r​t​r​a​n​s​p​l​a​n​t​a​t​i​e
			 */
			'0': string
			/**
			 * D​H​I​ ​H​a​a​r​t​r​a​n​s​p​l​a​n​t​a​t​i​e
			 */
			'1': string
			/**
			 * F​U​E​ ​B​a​a​r​d​t​r​a​n​s​p​l​a​n​t​a​t​i​e
			 */
			'2': string
			/**
			 * D​H​I​ ​B​a​a​r​d​t​r​a​n​s​p​l​a​n​t​a​t​i​e
			 */
			'3': string
		}
		COUNTRY: {
			/**
			 * T​u​r​k​i​j​e
			 */
			'0': string
			/**
			 * N​e​d​e​r​l​a​n​d
			 */
			'1': string
			/**
			 * T​u​r​k​i​j​e​/​N​e​d​e​r​l​a​n​d
			 */
			'2': string
		}
		GENDER: {
			/**
			 * M​a​n​n​e​l​i​j​k
			 */
			'0': string
			/**
			 * V​r​o​u​w​e​l​i​j​k
			 */
			'1': string
		}
		QUALITY: {
			/**
			 * S​l​e​c​h​t
			 */
			'0': string
			/**
			 * N​o​r​m​a​a​l
			 */
			'1': string
			/**
			 * G​o​e​d
			 */
			'2': string
			/**
			 * P​e​r​f​e​c​t
			 */
			'3': string
		}
	}
	DENTAL: {
		CONTENT: {
			/**
			 * B​e​d​a​n​k​t​ ​v​o​o​r​ ​d​e​ ​i​n​t​e​r​e​s​s​e​ ​d​i​e​ ​u​ ​g​e​t​o​o​n​d​ ​h​e​e​f​t​ ​i​n​ ​o​n​z​e​ ​o​r​g​a​n​i​s​a​t​i​e​.
			 */
			INTRO_1: string
			/**
			 * U​ ​h​e​e​f​t​ ​o​p​ ​<​>​{​0​|​d​a​t​e​}​<​>​ ​e​e​n​ ​v​o​o​r​o​n​d​e​r​z​o​e​k​ ​o​n​d​e​r​g​a​a​n​ ​i​n​ ​L​e​l​y​s​t​a​d​ ​o​m​t​r​e​n​t​ ​e​e​n​ ​g​e​b​i​t​s​b​e​h​a​n​d​e​l​i​n​g​.
			 * @param {Date} 0
			 */
			INTRO_2: RequiredParams<'0|date'>
			/**
			 * H​i​e​r​o​n​d​e​r​ ​v​i​n​d​t​ ​d​e​ ​u​i​t​g​e​b​r​e​i​d​ ​b​e​h​a​n​d​e​l​p​l​a​n​ ​+​ ​k​o​s​t​e​n​p​l​a​a​t​j​e​ ​t​e​r​u​g​.
			 */
			INTRO_3: string
			/**
			 * B​E​H​A​N​D​E​L​P​L​A​N
			 */
			TREATMENT_PLAN: string
			/**
			 * E​x​t​r​a​c​t​i​e​s
			 */
			EXTRACTIONS: string
			/**
			 * I​m​p​l​a​n​t​a​a​t​ ​M​I​S​+​A​b​u​t​m​e​n
			 */
			MIS_IMPLANTS: string
			/**
			 * B​o​n​e​ ​g​r​a​f​t​i​n​g
			 */
			BONE_GRAFTS: string
			/**
			 * Z​i​r​c​o​n​i​u​m​ ​K​r​o​o​n
			 */
			ZIRCONIUM_CROWN: string
			/**
			 * P​o​r​c​e​l​e​i​n​ ​K​r​o​o​n
			 */
			PORCELAIN_CROWN: string
			/**
			 * E​-​M​a​x​ ​P​o​r​s​e​l​e​i​n​e​n​ ​K​r​o​o​n
			 */
			EMAX_CROWN: string
			/**
			 * Z​i​r​c​o​n​i​u​m​ ​F​a​c​i​n​g
			 */
			ZIRCONIUM_FACING: string
			/**
			 * P​o​r​c​e​l​e​i​n​ ​F​a​c​i​n​g
			 */
			PORCELAIN_FACING: string
			/**
			 * E​-​M​a​x​ ​P​o​r​s​e​l​e​i​n​e​n​ ​F​a​c​i​n​g
			 */
			EMAX_FACING: string
		}
		IMPLANT_TYPE: {
			/**
			 * N​o​r​m​a​a​l
			 */
			'0': string
			/**
			 * I​m​p​l​a​n​t​a​a​t
			 */
			'1': string
			/**
			 * Z​i​r​c​o​n​i​u​m
			 */
			'2': string
			/**
			 * P​o​r​c​e​l​e​i​n
			 */
			'3': string
			/**
			 * P​a​a​r​s
			 */
			'4': string
			/**
			 * W​i​t
			 */
			'5': string
			/**
			 * B​l​a​n​k
			 */
			'6': string
			/**
			 * E​-​m​a​x
			 */
			'7': string
			/**
			 * I​m​p​l​a​n​t​a​a​t​ ​P​o​r​c​e​l​e​i​n
			 */
			'8': string
			/**
			 * I​m​p​l​a​n​t​a​a​t​ ​W​i​t
			 */
			'9': string
			/**
			 * I​m​p​l​a​n​t​a​a​t​ ​Z​i​r​c​o​n​i​u​m
			 */
			'10': string
			/**
			 * I​m​p​l​a​n​t​a​a​t​ ​E​-​m​a​x
			 */
			'11': string
		}
		ALL_ON_TYPE: {
			/**
			 * N​o​n​e
			 */
			'0': string
			/**
			 * A​l​l​ ​O​n​ ​4
			 */
			'1': string
			/**
			 * A​l​l​ ​O​n​ ​6
			 */
			'2': string
		}
		ALL_ON_MATERIAL: {
			/**
			 * P​o​r​c​e​l​e​i​n
			 */
			'0': string
			/**
			 * Z​i​r​c​o​n​i​u​m
			 */
			'1': string
		}
		IMPLANT_BRAND: {
			/**
			 * M​I​S
			 */
			'0': string
		}
		ATTACHMENT_TYPE: {
			/**
			 * N​o​n​e
			 */
			'0': string
			/**
			 * F​a​c​i​n​g
			 */
			'1': string
			/**
			 * C​r​o​w​n
			 */
			'2': string
		}
		ATTACHMENT_MATERIAL: {
			/**
			 * P​o​r​s​e​l​e​i​n
			 */
			'0': string
			/**
			 * Z​i​r​c​o​n​i​u​m
			 */
			'1': string
			/**
			 * E​-​M​a​x
			 */
			'2': string
		}
	}
}

export type TranslationFunctions = {
	GENERIC: {
		/**
		 * Geachte {title} {name} {surname}
		 */
		DEAR: (arg: { name: string, surname: string, title: string }) => LocalizedString
		/**
		 * heer
		 */
		MR: () => LocalizedString
		/**
		 * mevrouw
		 */
		MRS: () => LocalizedString
		/**
		 * eerste
		 */
		FIRST: () => LocalizedString
		/**
		 * tweede
		 */
		SECOND: () => LocalizedString
	}
	HAIR: {
		/**
		 * Offerte + Analyse {2} behandeling te Hoofddorp voor dhr {0} {1}
		 */
		SUBJECT: (arg0: string, arg1: string, arg2: LocalizedString) => LocalizedString
		CONTENT: {
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.
			 */
			INSPECTION_1: () => LocalizedString
			/**
			 * Uw foto's / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw {0} behandeling, u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!
			 */
			INSPECTION_2: (arg0: unknown) => LocalizedString
			/**
			 * * Aangezien de beoordeling d.m.v. foto's is vastgesteld, bestaat een kleine kans van afwijking na de definitieve onderzoek in onze kliniek.
			 */
			INSPECTION_3: () => LocalizedString
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op <>{0|date}<> een vooronderzoek ondergaan omtrent uw {1} behandeling.
			 */
			NO_INSPECTION_1: (arg0: Date, arg1: LocalizedString) => LocalizedString
			/**
			 * Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.
			 */
			NO_INSPECTION_2: () => LocalizedString
			/**
			 * Rapport medisch team
			 */
			MEDICAL_TEAM_REPORT: () => LocalizedString
			/**
			 * <>Behandeling<>: {0}
			 */
			TREATMENT: (arg0: LocalizedString) => LocalizedString
			/**
			 * Kwaliteit / Volume donor
			 */
			QUALITY_VOLUME: () => LocalizedString
			/**
			 * Kwaliteit / Type haar
			 */
			QUALITY_TYPE: () => LocalizedString
			/**
			 * <>Aantal grafts {session|{1: eerste, 2: tweede}} sessie<>: {range} grafts
			 */
			GRAFT_COUNT: (arg: { range: string, session: '1' | '2' }) => LocalizedString
			/**
			 * niet verplicht
			 */
			NOT_REQUIRED: () => LocalizedString
			/**
			 * Techniek
			 */
			TECHNIQUE: () => LocalizedString
			/**
			 * Zone
			 */
			ZONES: () => LocalizedString
			/**
			 * Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar uw bevindingen, mocht u vragen of opmerkingen hebben dan horen wij deze graag van u.
			 */
			ENDING_COMMENT: () => LocalizedString
			/**
			 * Met vriendelijke groeten
			 */
			KIND_REGARDS: () => LocalizedString
			/**
			 * Extra Opmerking
			 */
			EXTRA_REMARKS: () => LocalizedString
			/**
			 * Behandeling data
			 */
			TREATMENT_NOTES: () => LocalizedString
			/**
			 * Behandeling bestemming
			 */
			TREATMENT_LOCATION: () => LocalizedString
			/**
			 * Kosten PRP behandeling (1 gratis): €{0}
			 */
			PRP_PRICE: (arg0: number) => LocalizedString
			/**
			 * Totaal: €{0}
			 */
			TOTAL: (arg0: number) => LocalizedString
			/**
			 * €{0} korting
			 */
			DISCOUNT: (arg0: number) => LocalizedString
			/**
			 * Retour vliegticket met KLM of Turkish Airlines
			 */
			FLIGHT_1: () => LocalizedString
			/**
			 * 3 overnachtingen in Hilton Doubbletree Istanbul
			 */
			FLIGHT_2: () => LocalizedString
			/**
			 * <>Verdoving<>: Pijnloos lokaal verdoving
			 */
			ANESTHESIA: () => LocalizedString
			/**
			 * <>Sessie<>: {0} sessie behandeling
			 */
			SESSIONS: (arg0: number) => LocalizedString
			/**
			 * Shampoo, lotion en medicatie
			 */
			SHAMPOO: () => LocalizedString
			/**
			 * 4x Nacontrole gedurende 10 maanden
			 */
			FOLLOW_UP: () => LocalizedString
			/**
			 * {0}x prp behandeling in Nederland
			 */
			PRP_COUNT: (arg0: number) => LocalizedString
			/**
			 * Vooronderzoek
			 */
			INVESTIGATION: () => LocalizedString
			/**
			 * Kosten behandeling {0} sessie{{s}} in {1} All-in €{2}
			 */
			TREATMENT_COST: (arg0: number, arg1: string, arg2: number) => LocalizedString
			/**
			 * {session|{1: Eerste, 2: Tweede}} sessie: €{cost}
			 */
			SESSION_COST: (arg: { cost: number, session: '1' | '2' }) => LocalizedString
			/**
			 * na min 12 maanden genezingstijd, niet verplicht
			 */
			SECOND_SESSION_NOTE: () => LocalizedString
			/**
			 * Inhoud All-in pakket {0}:
			 */
			PACKAGE_CONTENT: (arg0: string) => LocalizedString
			/**
			 * <>Duur behandeling {0|{1: eerste, 2: tweede}} sessie<>: {1} uur
			 */
			SESSION_DURATION: (arg0: '1' | '2', arg1: string) => LocalizedString
			/**
			 * {0|{1: Eerste, 2: Tweede}} sessie zone: {1} (zie schema onder)
			 */
			SESSION_ZONES: (arg0: '1' | '2', arg1: string) => LocalizedString
		}
		TECHNIQUE: {
			/**
			 * FUE Haartransplantatie
			 */
			'0': () => LocalizedString
			/**
			 * DHI Haartransplantatie
			 */
			'1': () => LocalizedString
			/**
			 * FUE Baardtransplantatie
			 */
			'2': () => LocalizedString
			/**
			 * DHI Baardtransplantatie
			 */
			'3': () => LocalizedString
		}
		COUNTRY: {
			/**
			 * Turkije
			 */
			'0': () => LocalizedString
			/**
			 * Nederland
			 */
			'1': () => LocalizedString
			/**
			 * Turkije/Nederland
			 */
			'2': () => LocalizedString
		}
		GENDER: {
			/**
			 * Mannelijk
			 */
			'0': () => LocalizedString
			/**
			 * Vrouwelijk
			 */
			'1': () => LocalizedString
		}
		QUALITY: {
			/**
			 * Slecht
			 */
			'0': () => LocalizedString
			/**
			 * Normaal
			 */
			'1': () => LocalizedString
			/**
			 * Goed
			 */
			'2': () => LocalizedString
			/**
			 * Perfect
			 */
			'3': () => LocalizedString
		}
	}
	DENTAL: {
		CONTENT: {
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie.
			 */
			INTRO_1: () => LocalizedString
			/**
			 * U heeft op <>{0|date}<> een vooronderzoek ondergaan in Lelystad omtrent een gebitsbehandeling.
			 */
			INTRO_2: (arg0: Date) => LocalizedString
			/**
			 * Hieronder vindt de uitgebreid behandelplan + kostenplaatje terug.
			 */
			INTRO_3: () => LocalizedString
			/**
			 * BEHANDELPLAN
			 */
			TREATMENT_PLAN: () => LocalizedString
			/**
			 * Extracties
			 */
			EXTRACTIONS: () => LocalizedString
			/**
			 * Implantaat MIS+Abutmen
			 */
			MIS_IMPLANTS: () => LocalizedString
			/**
			 * Bone grafting
			 */
			BONE_GRAFTS: () => LocalizedString
			/**
			 * Zirconium Kroon
			 */
			ZIRCONIUM_CROWN: () => LocalizedString
			/**
			 * Porcelein Kroon
			 */
			PORCELAIN_CROWN: () => LocalizedString
			/**
			 * E-Max Porseleinen Kroon
			 */
			EMAX_CROWN: () => LocalizedString
			/**
			 * Zirconium Facing
			 */
			ZIRCONIUM_FACING: () => LocalizedString
			/**
			 * Porcelein Facing
			 */
			PORCELAIN_FACING: () => LocalizedString
			/**
			 * E-Max Porseleinen Facing
			 */
			EMAX_FACING: () => LocalizedString
		}
		IMPLANT_TYPE: {
			/**
			 * Normaal
			 */
			'0': () => LocalizedString
			/**
			 * Implantaat
			 */
			'1': () => LocalizedString
			/**
			 * Zirconium
			 */
			'2': () => LocalizedString
			/**
			 * Porcelein
			 */
			'3': () => LocalizedString
			/**
			 * Paars
			 */
			'4': () => LocalizedString
			/**
			 * Wit
			 */
			'5': () => LocalizedString
			/**
			 * Blank
			 */
			'6': () => LocalizedString
			/**
			 * E-max
			 */
			'7': () => LocalizedString
			/**
			 * Implantaat Porcelein
			 */
			'8': () => LocalizedString
			/**
			 * Implantaat Wit
			 */
			'9': () => LocalizedString
			/**
			 * Implantaat Zirconium
			 */
			'10': () => LocalizedString
			/**
			 * Implantaat E-max
			 */
			'11': () => LocalizedString
		}
		ALL_ON_TYPE: {
			/**
			 * None
			 */
			'0': () => LocalizedString
			/**
			 * All On 4
			 */
			'1': () => LocalizedString
			/**
			 * All On 6
			 */
			'2': () => LocalizedString
		}
		ALL_ON_MATERIAL: {
			/**
			 * Porcelein
			 */
			'0': () => LocalizedString
			/**
			 * Zirconium
			 */
			'1': () => LocalizedString
		}
		IMPLANT_BRAND: {
			/**
			 * MIS
			 */
			'0': () => LocalizedString
		}
		ATTACHMENT_TYPE: {
			/**
			 * None
			 */
			'0': () => LocalizedString
			/**
			 * Facing
			 */
			'1': () => LocalizedString
			/**
			 * Crown
			 */
			'2': () => LocalizedString
		}
		ATTACHMENT_MATERIAL: {
			/**
			 * Porselein
			 */
			'0': () => LocalizedString
			/**
			 * Zirconium
			 */
			'1': () => LocalizedString
			/**
			 * E-Max
			 */
			'2': () => LocalizedString
		}
	}
}

export type Formatters = {
	date: (value: Date) => unknown
}

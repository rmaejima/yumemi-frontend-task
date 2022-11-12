import { z } from 'zod';

/** 人口構成スキーマ */
export const populationSchema = z.object({
  year: z.number(),
  value: z.number(),
});
/** 人口構成I/F */
export type Population = z.infer<typeof populationSchema>;

/** 都道府県スキーマ */
export const prefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string().min(1),
});
/** 都道府県I/F */
export type Prefecture = z.infer<typeof prefectureSchema>;

/** 県と人口構成スキーマ */
export const prefecturePopulationsSchema = prefectureSchema.and(
  z.object({
    populations: z.array(populationSchema),
  }),
);
/** 県と人口構成I/F */
export type PrefecturePopulations = z.infer<typeof prefecturePopulationsSchema>;

/** Resas APIのエラーレスポンススキーマ */
export const resasErrorResponseSchema = z.object({
  statusCode: z.string().min(3),
  message: z.string(),
  description: z.string(),
});
/** Resas APIのエラーレスポンスI/F */
export type ResasErrorResponse = z.infer<typeof resasErrorResponseSchema>;

# Discordancias UGT vs Kaixo.com

Comparacion de respuestas entre los PDFs de UGT-SP Euskadi y los datos scrapeados de ope.kaixo.com.

## Herramientas

### 1. Extraer PDF de UGT a JSON

```bash
python3 tools/extract_ugt.py <pdf_path> <output_json>
```

Ejemplo:
```bash
python3 tools/extract_ugt.py /tmp/ugt_pdfs/común_ABC1.pdf /tmp/ugt_general_A_B_C1.json
```

### 2. Comparar dos JSONs

```bash
python3 tools/compare_jsons.py <json_a> <json_b> --labels <label_a> <label_b>
```

Ejemplo:
```bash
python3 tools/compare_jsons.py /tmp/ugt_general_A_B_C1.json general_A_B_C1.last.json --labels UGT Kaixo
```

## Resultados

### general_A_B_C1
- Preguntas UGT: 200
- Emparejadas: 200
- Discordancias: **2**

| # | UGT | Kaixo |
|---|-----|-------|
| 65 | **D** | C |
| 192 | **A** | D |

### general_C2_C3_D_E
- Preguntas UGT: 300
- Emparejadas: 300
- Discordancias: **2**

| # | UGT | Kaixo |
|---|-----|-------|
| 100 | **D** | C |
| 290 | **A** | D |

### operario
- Preguntas UGT: 200
- Emparejadas: 200
- Discordancias: **2**

| # | UGT | Kaixo |
|---|-----|-------|
| 5 | **A** | B |
| 31 | **A** | B |

### celador
- Preguntas UGT: 200
- Emparejadas: 199
- Anulada por UGT: Q181 (NULA)
- Discordancias: **1**

| # | UGT | Kaixo |
|---|-----|-------|
| 153 | **C** | A |

### auxiliar_administrativo
- Preguntas UGT: 200
- Emparejadas: 200
- Discordancias: **3**

| # | UGT | Kaixo |
|---|-----|-------|
| 81 | **D** | A |
| 139 | **D** | A |
| 155 | **B** | A |

## Total de discordancias: 10

import { toPng } from 'html-to-image'

export async function exportElementToPng(element: HTMLElement, fileName: string) {
  const dataUrl = await toPng(element)
  const link = document.createElement('a')
  link.download = fileName
  link.href = dataUrl
  link.click()
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function fetchTerms(type: 'POSTULANTE' | 'EMPRESA' | 'PRIVACY') {
  try {
    const response = await fetch(`${API_BASE_URL}/api/terms/public/${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Siempre obtener la versión más reciente
    });

    if (!response.ok) {
      throw new Error(`Error al obtener términos: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data; // Retorna solo el objeto de datos
  } catch (error) {
    console.error('Error fetching terms:', error);
    throw error;
  }
}

export async function fetchPDFContent(pdfUrl: string): Promise<string> {
  try {
    // Si el PDF está en CloudFront, necesitamos descargarlo y parsearlo
    // Por ahora, retornamos la URL para mostrarla en un iframe
    // En el futuro, podríamos parsear el PDF aquí
    return pdfUrl;
  } catch (error) {
    console.error('Error fetching PDF content:', error);
    throw error;
  }
}


from django.shortcuts import render
import pandas as pd

def upload_file(request):
    if request.method == 'POST' and request.FILES.get('excel_file'):
        file = request.FILES['excel_file']
        
        try:
            if file.name.endswith('.xlsx'):
                df = pd.read_excel(file)
            elif file.name.endswith('.csv'):
                df = pd.read_csv(file)
            
            # Convert to HTML table for display
            table_html = df.to_html(classes='table table-striped')
            return render(request, 'result.html', {'table': table_html})
            
        except Exception as e:
            error = f"Error reading file: {str(e)}"
            return render(request, 'upload.html', {'error': error})
    
    return render(request, 'upload.html')
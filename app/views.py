from django.shortcuts import render
import pandas as pd
import json

def upload_file(request):
    if request.method == 'POST' and request.FILES.get('excel_file'):
        file = request.FILES['excel_file']
        
        try:
            if file.name.endswith('.xlsx'):
                df = pd.read_excel(file)
            elif file.name.endswith('.csv'):
                df = pd.read_csv(file)
            else:
                raise ValueError("Unsupported file type. Please upload .xlsx or .csv files.")
            
            #Check if columns are correct
            if 'Month' not in df.columns or 'Sales' not in df.columns:
                raise KeyError("Missing columns within Excel sheet. Make sure to use the right file model.")

            # Convert to json for Chart.js
            labels = df['Month'].tolist()
            data = df['Sales'].tolist()

            context = {
                'labels': json.dumps(labels),
                'sales': json.dumps(data),
            }

            return render(request, 'chart.html', context)

        except Exception as e:
            error = f"Error reading file: {str(e)}"
            return render(request, 'upload.html', {'error': error})
    
    return render(request, 'upload.html')